<?php

namespace App\Models;

use Session;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    public $items = null;
    public $totalQty = 0;
    public $totalPrice = 0;

    public function __construct($oldCart)
    {
        if ($oldCart) {
            $this->items = $oldCart->items;
            $this->totalQty = $oldCart->totalQty;
            $this->totalPrice = $oldCart->totalPrice;
        }
    }

// **************** ADD TO CART *******************

    public function add($item, $db, $id, $size, $color, $keys, $values, $category, $section)
    {
        $size_cost = 0;
        $storedItem = ['db'=>$db, 'qty' => 0, 'size_key' => 0, 'size_qty' => $item->size_qty, 'size_price' => $item->size_price, 'size' => $item->size, 'color' => $item->color, 'stock' => $item->stock, 'price' => $item->price, 'item' => $item, 'license' => '', 'dp' => '0', 'keys' => $keys, 'values' => $values, 'category' => $category, 'section' => $section];
        if ($item->type == 'Physical') {
            if ($this->items) {
                if (array_key_exists($db.$id . $size . $color . str_replace(str_split(' ,'), '', $values), $this->items)) {
                    $storedItem = $this->items[$db.$id . $size . $color . str_replace(str_split(' ,'), '', $values)];
                }
            }
        } else {
            if ($this->items) {
                if (array_key_exists($db.$id . $size . $color . str_replace(str_split(' ,'), '', $values), $this->items)) {
                    $storedItem = $this->items[$db.$id . $size . $color . str_replace(str_split(' ,'), '', $values)];
                    $storedItem['dp'] = 1;
                }
            }
        }
        $storedItem['qty']++;
        $stck = (string)$item->stock;
        if ($stck != null) {
            $storedItem['stock']--;
        }
        if (!empty($item->size)) {
            $storedItem['size'] = $item->size[0];
        }
        if (!empty($size)) {
            $storedItem['size'] = $size;
        }
        if (!empty($item->size_qty)) {
            $storedItem['size_qty'] = $item->size_qty[0];
        }
        if ($item->size_price != null) {
            $storedItem['size_price'] = $item->size_price[0];
            $size_cost = $item->size_price[0];
        }
        if (!empty($color)) {
            $storedItem['color'] = $color;
        }

        if (!empty($keys)) {
            $storedItem['keys'] = $keys;
        }
        if (!empty($values)) {
            $storedItem['values'] = $values;
        }
        if (!empty($category)) {
            $storedItem['category'] = $category;
        }
        if (!empty($section)) {
            $storedItem['section'] = $section;
        }

        $item->price += $size_cost;
    
        $storedItem['price'] = $item->price * $storedItem['qty'];
        $this->items[$db.$id . $size . $color . str_replace(str_split(' ,'), '', $values)] = $storedItem;
        $this->totalQty++;
    }

// **************** ADD TO CART ENDS *******************


// **************** ADD TO CART MULTIPLE *******************

    public function addnum($item,$db, $id, $qty, $size, $color, $size_qty, $size_price, $size_key, $keys, $values, $category, $section)
    {
        $size_cost = 0;
        $storedItem = ['db'=>$db,'qty' => 0, 'size_key' => 0, 'size_qty' => $item->size_qty, 'size_price' => $item->size_price, 'size' => $item->size, 'color' => $item->color, 'stock' => $item->stock, 'price' => $item->price, 'item' => $item, 'license' => '', 'dp' => '0', 'keys' => $keys, 'values' => $values, 'category' => $category, 'section' => $section];
        if ($item->type == 'Physical') {
            if ($this->items) {
                if (array_key_exists($db.$id . $size . $color . str_replace(str_split(' ,'), '', $values), $this->items)) {
                    $storedItem = $this->items[$db.$id . $size . $color . str_replace(str_split(' ,'), '', $values)];
                }
            }
        } else {
            if ($this->items) {
                if (array_key_exists($db.$id . $size . $color . str_replace(str_split(' ,'), '', $values), $this->items)) {
                    $storedItem = $this->items[$db.$id . $size . $color . str_replace(str_split(' ,'), '', $values)];
                    $storedItem['dp'] = 1;
                }
            }
        }
        $storedItem['qty'] = $storedItem['qty'] + $qty;
        $stck = (string)$item->stock;
        if ($stck != null) {
            $storedItem['stock']--;
        }
        if (!empty($item->size)) {
            $storedItem['size'] = $item->size[0];
        }
        if (!empty($size)) {
            $storedItem['size'] = $size;
        }
        if (!empty($size_key)) {
            $storedItem['size_key'] = $size_key;
        }
        if (!empty($item->size_qty)) {
            $storedItem['size_qty'] = $item->size_qty [0];
        }
        if (!empty($size_qty)) {
            $storedItem['size_qty'] = $size_qty;
        }
        if (!empty($item->size_price)) {
            $storedItem['size_price'] = $item->size_price[0];
            $size_cost = $item->size_price[0];
        }
        if (!empty($size_price)) {
            $storedItem['size_price'] = $size_price;
            $size_cost = $size_price;
        }
        if (!empty($item->color)) {
            $storedItem['color'] = $item->color[0];
        }
        if (!empty($color)) {
            $storedItem['color'] = $color;
        }
        if (!empty($keys)) {
            $storedItem['keys'] = $keys;
        }
        if (!empty($values)) {
            $storedItem['values'] = $values;
        }
        if (!empty($category)) {
            $storedItem['category'] = $category;
        }
        if (!empty($section)) {
            $storedItem['section'] = $section;
        }

        $item->price += $size_cost;

        $storedItem['price'] = $item->price * $storedItem['qty'];
        $this->items[$db.$id . $size . $color . str_replace(str_split(' ,'), '', $values)] = $storedItem;
        $this->totalQty++;
    }


// **************** ADD TO CART MULTIPLE ENDS *******************


// **************** ADDING QUANTITY *******************

    public function adding($item,$id, $size_qty, $size_price)
    {
        $storedItem = ['qty' => 0, 'size_key' => 0, 'size_qty' => $item->size_qty, 'size_price' => $item->size_price, 'size' => $item->size, 'color' => $item->color, 'stock' => $item->stock, 'price' => $item->price, 'item' => $item, 'license' => '', 'dp' => '0', 'keys' => '', 'values' => '', 'category' => '', 'section' => ''];
        if ($this->items) {
            if (array_key_exists($id, $this->items)) {
                $storedItem = $this->items[$id];
            }
        }
        $storedItem['qty']++;

        if ($item->stock != null) {
            $storedItem['stock']--;
        }
        $item->price = (double)$size_price;
        $storedItem['price'] = $item->price * $storedItem['qty'];
        $this->items[$id] = $storedItem;
        $this->totalQty++;
    }

// **************** ADDING QUANTITY ENDS *******************


// **************** REDUCING QUANTITY *******************

    public function reducing($item, $id, $size_qty, $size_price)
    {
        $storedItem = ['qty' => 0, 'size_key' => 0, 'size_qty' => $item->size_qty, 'size_price' => $item->size_price, 'size' => $item->size, 'color' => $item->color, 'stock' => $item->stock, 'price' => $item->price, 'item' => $item, 'license' => '', 'dp' => '0', 'keys' => '', 'values' => '', 'category' => '', 'section' => ''];
        if ($this->items) {
            if (array_key_exists($id, $this->items)) {
                $storedItem = $this->items[$id];
            }
        }
        $storedItem['qty']--;
        if ($item->stock != null) {
            $storedItem['stock']++;
        }

        $item->price = (double)$size_price;
        Session::forget('current_discount');
        $storedItem['price'] = $item->price * $storedItem['qty'];
        $this->items[$id] = $storedItem;
        $this->totalQty--;
    }

// **************** REDUCING QUANTITY ENDS *******************

    public function updateLicense($id, $license)
    {

        $this->items[$id]['license'] = $license;
    }

    public function updateColor($item, $id, $color)
    {

        $this->items[$id]['color'] = $color;
    }

    public function removeItem( $id)
    {
        $this->totalQty -= $this->items[$id]['qty'];
        $this->totalPrice -= $this->items[$id]['price'];
        unset($this->items[$id]);
        if (Session::has('current_discount')) {
            $data = Session::get('current_discount');
            if (array_key_exists($id, $data)) {
                unset($data[$id]);
                Session::put('current_discount', $data);
            }
        }
    }
}
