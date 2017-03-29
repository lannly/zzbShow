/*配置JS*/
    $(function () {
        $('.txt1 h3').animate({
            'top': '0',
            'opacity': '1',
        }, {
            duration: 1000,
        });
        $('.txt1 .info').delay(300).animate({
            'opacity': '1',
            'top': '50',
        }, {
            duration: 1000,
        });
        $('.download-btn').delay(2500).animate({
            'opacity': '1',
        }, {
            duration: 1000,
        });
        $.fn.fullpage({
            slidesColor: ['#1d1e5f', '#dbf7f9', '#27302f'],
            anchors: ['page1', 'page2', 'page3'],
            afterLoad: function (link, index) {
                switch (index) {
                    case 1:
                        $('.txt1 h3').animate({
                            'top': '0',
                            'opacity': '1',
                        }, {
                            duration: 1000,
                        });
                        $('.txt1 .info').delay(300).animate({
                            'top': '50',
                            'opacity': '1',
                        }, {
                            duration: 1000,
                        });
                        $('.download-btn').delay(2500).animate({
                            'opacity': '1',
                        }, {
                            duration: 1000,
                        });
                        break;
                    case 2:
                        $('.txt1 h3').animate({
                            'top': '30',
                            'opacity': '0',
                        }, {
                            duration: 1,
                        });
                        $('.txt1 .info').animate({
                            'opacity': '0',
                            'top': '70',
                        }, {
                            duration: 1,
                        });
                        $('.download-btn').animate({
                            'opacity': '0',
                        }, {
                            duration: 1,
                        });
                        break;
                    case 3:
                        break;
                }
            },
        })
    })