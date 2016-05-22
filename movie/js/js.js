//3 通用函数
        function g(selector){
            var method=selector.substr(0,1)=='.'?'getElementsByClassName':'getElementById';
            return document[method](selector.substr(1));
        }
        //随机生成一个值，支持取值范围 random([min],[max])
        function random(range){
            var max=Math.max(range[0],range[1]);
            var min=Math.min(range[0],range[1]);

            var diff=max-min;
            var num=Math.floor((Math.random()*diff+min));

            return num;
        }

        //计算取值范围
        function range(){
            var range={ left:{ x:[],y:[] },right:{ x:[],y:[] } };

            var wrap={
                w:g('#wrap').clientWidth,
                h:g('#wrap').clientHeight
            };
            var photo={
                w:g('.photo')[0].clientWidth,
                h:g('.photo')[0].clientHeight
            };
            range.wrap=wrap;
            range.photo=photo;

            range.left.x=[ 0-photo.w/2,wrap.w/2-photo.w ];
            range.left.y=[ 0-photo.h/2,wrap.h-photo.h/2 ];

            range.right.x=[ wrap.w/2+photo.w/2,wrap.w];
            range.right.y=[ 0-photo.h/2,wrap.h-photo.h/2 ];

            return range;
        }

        //4 输出所有海报
        var data=data;
        function addPhotos(){

            var template=g('#wrap').innerHTML;
            var html=[];
            var nav=[];

            for(s in data){
            //for(var s=0;s<data.length;s++)
                var _html=template
                        .replace('{{index}}',s)
                        .replace('{{img}}',s+'.jpg')
                        .replace('{{caption}}',data[s].caption)
                        .replace('{{desc}}',data[s].desc);
                html.push(_html);
//
                nav.push('<span class="i" id="nav_'+s+'" onclick="turn( g(\'#photo_'+s+'\'))">&#xf112</span>');

            }
            html.push('<div class="nav">'+nav.join('')+'</div>');
            g('#wrap').innerHTML=html.join('');


            rsort(random([0,data.length]));
        }
        addPhotos();



        //排序海报
        function rsort(n){

            var _photo=g('.photo');
            var photos=[];

            for(var s=0;s<_photo.length;s++){
                _photo[s].className=_photo[s].className.replace(/\s*photo-center\s*/,' ');

                _photo[s].className=_photo[s].className.replace(/\s*photo-front\s*/,' ');
                _photo[s].className=_photo[s].className.replace(/\s*photo-back\s*/,' ');
                _photo[s].style.left='';
                _photo[s].style.top='';
                _photo[s].style['transform']='rotate(0deg) scale(1.3)';

                _photo[s].className+=' photo-front';

                photos.push(_photo[s]);
            }

//            var photo_center=g('#photo_'+n);   随机取一张作为中间的图片

            var photo_center=photos.splice(n,1)[0];
            photo_center.className +=' photo-center ';

            //将图片分两边两组
            var photo_left=photos.splice(0,Math.ceil(photos.length/2));
            var photo_right=photos;

            var ranges=range();
            for(s in photo_left){
                photo_left[s].style.left=random(ranges.left.x)+'px';
                photo_left[s].style.top=random(ranges.left.y)+'px';
                photo_left[s].style['transform']='rotate('+random([-150,150])+'deg) scale(1)';
            }
            for(s in photo_right){
                photo_right[s].style.left=random(ranges.right.x)+'px';
                photo_right[s].style.top=random(ranges.right.y)+'px';
                photo_right[s].style['transform']='rotate('+random([-150,150])+'deg) scale(1)';
            }

//            控制按钮
            var navs=g('.i');

            for(var s=0;s<navs.length;s++){
                navs[s].className=navs[s].className.replace(/\s*i_current\s*/,' ');
                navs[s].className=navs[s].className.replace(/\s*fa fa-fw\s*/,' ');
                navs[s].className=navs[s].className.replace(/\s*i_current\s*/,' ');
                navs[s].className=navs[s].className.replace(/\s*i_back\s*/,' ');
            }

            g('#nav_'+n).className +=' i_current fa fa-fw';
        }


        //1页面翻转
        function turn(elem){
            var cls=elem.className;
            var n=elem.id.split('_')[1];

            if(!/photo-center/.test(cls)){
                return rsort(n);
            }

            if(/photo-front/.test(cls)){
                cls=cls.replace(/photo-front/,'photo-back');
                g('#nav_'+n).className +=" i_back";
            }
            else{
                cls=cls.replace(/photo-back/,'photo-front');
                g('#nav_'+n).className=g('#nav_'+n).className.replace(/\s*i_back\s*/,' ')
            }
            return elem.className=cls;
        }