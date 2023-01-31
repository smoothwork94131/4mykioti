<?php

namespace App\Http\Controllers\Vendor;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Gallery;
use App\Models\Product;
use Image;
use Auth;

use Mtownsend\RemoveBg\RemoveBg;

class GalleryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function show()
    {
        $data[0] = 0;
        $id = $_GET['id'];
        $prod = Product::findOrFail($id);
        if (count($prod->galleries)) {
            $data[0] = 1;
            $data[1] = $prod->galleries;
        }
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = null;
        $lastid = $request->product_id;

        $apiKey = "YAypVmKK55sfxF4SPZdMFLyx";
        $removebg = new RemoveBg($apiKey);

        if ($files = $request->file('gallery')) {
            foreach ($files as $key => $file) {
                $val = $file->getClientOriginalExtension();
                if ($val == 'jpeg' || $val == 'jpg' || $val == 'png' || $val == 'svg') {
                    $gallery = new Gallery;


                    $img = Image::make($file->getRealPath())->resize(800, 800);
                    $thumbnail = time() . str_random(8) . '.jpg';
                    $img->save(public_path() . '/assets/images/galleries/' . $thumbnail);

                    $gallery_path = public_path() . '/assets/images/galleries/'.$thumbnail;
                    $removebg->file($gallery_path)
                    ->headers([
                        'X-Width' => 600,
                        'X-Height' => 600,
                    ])
                    ->body([
                        'size' => '4k', // regular, medium, hd, 4k, auto
                        'channels' => 'rgba', // rgba, alpha
                    ])
                    ->save($gallery_path);

                    $gallery['photo'] = $thumbnail;
                    $gallery['product_id'] = $lastid;
                    $gallery->save();
                    $data[] = $gallery;
                }
            }
        }
        return response()->json($data);
    }

    public function destroy()
    {

        $id = $_GET['id'];
        $gal = Gallery::findOrFail($id);
        if (file_exists(public_path() . '/assets/images/galleries/' . $gal->photo)) {
            unlink(public_path() . '/assets/images/galleries/' . $gal->photo);
        }
        $gal->delete();

    }

}
