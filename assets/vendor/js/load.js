(function($) {
    "use strict";

    $(document).ready(function() {
        //cart item remove code
        $('.cart-remove').on('click', function() {
            $(this).parent().parent().remove();
        });
        //cart item remove code ends


        /*  Bootstrap colorpicker js  */
        $('.cp').colorpicker();
        // Colorpicker Ends Here

        // IMAGE UPLOADING :)
        $(".img-upload").on("change", function() {
            console.log("img-upload");
            var imgpath = $(this).parent();
            var file = $(this);
            readURL(this, imgpath);
        });

        function readURL(input, imgpath) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    imgpath.css('background', 'url(' + e.target.result + ')');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        // IMAGE UPLOADING PRODUCT :)
        $(".img-upload-p").on("change", function() {
            var imgpath = $(this).parent();
            console.log("img-upload-p");
            readURLp(this, imgpath);
        });

        function readURLp(input, imgpath) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    //Initiate the JavaScript Image object.
                    var image = new Image();

                    //Set the Base64 string return from FileReader as source.
                    image.src = e.target.result;

                    //Validate the File Height and Width.
                    image.onload = function() {
                        var height = this.height;
                        var width = this.width;
                        var lang806 = langg.hasOwnProperty('lang806') ? langg.lang806 : 'Image height and width must be 600 x 600.';
                        var lang807 = langg.hasOwnProperty('lang807') ? langg.lang807 : 'Image must have square size.';
                        if (height < 600 && width < 600) {
                            if (height != width) {
                                $('.img-alert').html(lang807);
                                $('.img-alert').removeClass('d-none');
                                $('#image-upload').val('');
                                $('#image-upload').prop('required', true);
                                imgpath.css('background', 'url()');
                            } else {
                                $('.img-alert').html(lang806);
                                $('.img-alert').removeClass('d-none');
                                $('#image-upload').val('');
                                $('#image-upload').prop('required', true);
                                imgpath.css('background', 'url()');
                            }
                        } else {
                            if (height != width) {
                                $('.img-alert').html(lang807);
                                $('.img-alert').removeClass('d-none');
                                $('#image-upload').val('');
                                $('#image-upload').prop('required', true);
                                imgpath.css('background', 'url()');
                            } else {
                                $('.img-alert').addClass('d-none');
                                imgpath.css('background', 'url(' + e.target.result + ')');

                                if ($("#is_photo").length > 0) {
                                    $("#is_photo").val('1')
                                }

                            }

                        }

                    };

                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        // IMAGE UPLOADING ENDS :)

        // GENERAL IMAGE UPLOADING :)
        $(".img-upload1").on("change", function() {
            var imgpath = $(this).parent().prev().find('img');
            console.log("img-upload1");
            var file = $(this);
            readURL1(this, imgpath);
        });

        function readURL1(input, imgpath) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    imgpath.attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        // NIC EDITOR :)
        var elementArray = document.getElementsByClassName("nic-edit");
        for (var i = 0; i < elementArray.length; ++i) {
            nicEditors.editors.push(
                new nicEditor().panelInstance(
                    elementArray[i]
                )
            );
            $('.nicEdit-panelContain').parent().width('100%');
            $('.nicEdit-panelContain').parent().next().width('98%');
        }
        //]]>
        // NIC EDITOR ENDS :)

        // NIC EDITOR FULL :)
        var elementArray = document.getElementsByClassName("nic-edit-p");
        for (var i = 0; i < elementArray.length; ++i) {
            nicEditors.editors.push(
                new nicEditor({ fullPanel: true }).panelInstance(
                    elementArray[i]
                )
            );
            $('.nicEdit-panelContain').parent().width('100%');
            $('.nicEdit-panelContain').parent().next().width('98%');
        }
        //]]>
        // NIC EDITOR FULL ENDS :)

        // Return Policy

        $("#location").change(function() {
            var location_id = $(this).val();
            var link = $(this).find(':selected').attr('data-href');
            if (!location_id) return;

            $.ajax({
                type: "GET",
                url: link,
                success: function(data) {
                    if (data != "0") {
                        $("#policy").val(data);
                    }
                }
            });
        });


        // Return Policy Ends


        // Check Click :)
        $(".checkclick").on("change", function() {
            if (this.checked) {
                $(this).parent().parent().parent().next().removeClass('showbox');
            } else {
                $(this).parent().parent().parent().next().addClass('showbox');
            }

        });
        // Check Click Ends :)


        // Check Click1 :)
        $(".checkclick1").on("change", function() {
            if (this.checked) {
                $(this).parent().parent().parent().parent().next().removeClass('showbox');
            } else {
                $(this).parent().parent().parent().parent().next().addClass('showbox');
            }

        });
        // Check Click1 Ends :)

        //  Alert Close
        $("button.alert-close").on('click', function() {
            $(this).parent().hide();
        });

    });

    // Drop Down Section Ends	

})(jQuery);