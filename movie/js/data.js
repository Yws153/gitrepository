﻿
var data=[];

var dataStr='1.孙尚香<br/>\
<br/>\
擅长：近战、游走、爆发<br/>\
获得方式：8100金币/560点券<br/>\
英雄背景：事态急转直下，尚香冷静非常，怒斥追兵，毅然随夫君刘备返回荆州。 匆匆两载如白驹过隙。东吴来使曰母亲病重，尚香闻讯心急如焚，随来使返东吴。岂料此为孙权又一计谋……自此，她再未返蜀地。<br/>\
<br/>\
<br/>\
2.忘川巫女<br/>\
<br/>\
擅长：远程、爆发、控制<br/>\
获得方式：8100金币/560点券<br/>\
英雄背景：传说是这样，如果怀着极大怨恨，不惜一切的，也要将那个人送入冥府。那么，在漆黑如墨的夜里，般若将随风而来，取人性命。 代价，不过是许愿之人离世后的魂魄，归于般若。 至于什么无法转世，灵魂受尽百般煎熬，与眼前必将敌人除之而后快相比，又算得了什么。……<br/>\
<br/>\
<br/>\
3.暗月猎手<br/>\
<br/>\
擅长：远程、推进、后期<br/>\
获得方式：活动（完成新手战斗指引获得）<br/>\
英雄背景：艾薇是暗月森林最美丽的精灵。可是，正是这份美丽，引来了大主祭的垂涎。为了摆脱纠缠，艾薇决定成为法定不得婚嫁的皇室神射手。经过激烈的角逐，她得到精灵女王的认可，成功入选，甚至获得了专属于女性精灵射手的荣耀之名——神箭哲琴。<br/>\
<br/>\
<br/>\
4.战神阿瑞斯<br/>\
<br/>\
擅长：近战、后期<br/>\
获得方式：8100金币/560点券<br/>\
英雄背景：最骁勇悍战的战神阿瑞斯曾伴随鲜花从神后赫拉腹中诞生，他生来便象征着力量与权力，战斗就是他最大的爱好。冥王哈迪斯经常邀请他一同前往人类的战场狩猎，热爱战斗的阿瑞斯欣然应允，于是冥王和战神一同驰骋于战场之上，神灵降临之处只有死亡与恐惧。"<br/>\
<br/>\
<br/>\
5.幻卡魔女<br/>\
<br/>\
擅长：远程、游走、推进、爆发<br/>\
获得方式：8100金币/560点券<br/>\
英雄背景：艾迪兰知道如果自己死去，王子的打算就会落空。艾迪兰下定决心，她要拯救父母花费一生心血经营的国家。"如果你真的有灵，请你帮助我。"艾迪兰想起了魔女赠她的卡牌，她庄严地许下诺言："请拿走我最宝贵的东西，让我的王国远离浩劫。"<br/>\
<br/>\
<br/>\
6.绯雨剑星<br/>\
<br/>\
擅长：近战、游走、爆发<br/>\
获得方式：8100金币/560点券<br/>\
英雄背景：学剑之时，他暗暗立志，有朝一日要用自己的剑，保护弱小的，饱受苦难的人们，哪怕自己双手沾满鲜血，也在所不惜！却不曾也不敢细想那些人也有着他们所需要守护的幸福！<br/>\
<br/>\
<br/>\
7.金乌<br/>\
<br/>\
擅长：远程、后期<br/>\
获得方式：8100金币/560点券<br/>\
英雄背景：三千里繁华，三千里洪荒。后裔张弓，冰矢裂日，九只金乌堕为烈火。大地的伤口愈合，而天命却突然感到身后剧烈的灼痛。 金乌胁持了天命，逼迫后羿弃弓掷箭。<br/>\
<br/>\
<br/>\
8.凯撒大帝<br/>\
<br/>\
擅长：近战、推进、爆发<br/>\
获得方式：8100金币/560点券<br/>\
英雄背景：以我一生之力，征服我所见的土地；我来，我见，我征服。" 大帝如是说，于是他执起永恒之剑，挥剑所向，万众臣服——这就是凯撒，我们的王！从他降生之时，神明就挥舞霞光为他伴礼。……<br/>\
<br/>\
<br/>\
9.龙骑士<br/>\
<br/>\
擅长：近战、远程、后期<br/>\
获得方式：关注官网微信<br/>\
英雄背景：边境的小酒馆里，老板略带神秘的说起这样一个传说：好心的领主老爷和他的养子生活在一座美丽的庄园里。然而，魔龙化身的养子本性嗜血又残暴。他魔性大发之后，重伤领主，焚毁庄园......<br/>\
<br/>\
<br/>\
10.闪电侠<br/>\
<br/>\
擅长：近战、游走、推进<br/>\
获得方式：8100金币/560点券<br/>\
英雄背景：英雄的出现唤醒了一些人沉睡的正义！对抗邪恶的前线上出现了一群无畏的年轻人。他们视那位英雄为指引前行的明灯，以"电光侠"为名，誓将黑暗斩除，迎接黎明的未来！<br/>\
<br/>\
<br/>\
11.司马懿<br/>\
<br/>\
擅长：远程、控制、爆发<br/>\
获得方式：8100金币/560点券/幸运转轮(2015.8.07-2015.8.13)<br/>\
英雄背景：他生于乱世，被称为有"狼顾"之相。 他善于奇策，多次征伐有功，曾两次率大军成功对抗诸葛亮北伐。 他还曾率领大军征伐辽东公孙渊，采用声东击西之计，出其不意包围辽东主城襄平，一举击破并斩杀辽东公孙渊，平定辽东之乱。……<br/>\
<br/>\
<br/>\
12.企鹅<br/>\
<br/>\
擅长：远程、推进、后期<br/>\
获得方式：8100金币/560点券/幸运转轮(2015.8.07-2015.8.13)<br/>\
英雄背景：当人类的命运悬于一丝之际，一位英雄挺身而出！没有人知道它的来历，就像没有人知道它到底有多强。它毅然肩负起人类的未来，通过时空逆转转置返回了智能机器人研发之前。<br/>\
<br/>\
<br/>\
13.小乔<br/>\
<br/>\
擅长：远程、控制、爆发<br/>\
获得方式：活动：充值500元<br/>\
英雄背景：为随夫君左右，小乔褪下红妆换武装，紧随周郎左右，转战千里，坚强之处，不输男儿。 无奈相依相伴十一载，却终敌不过生老病死，一代英才周公瑾，年仅三十六而亡，自此独留红颜在人间。<br/>\
<br/>\
<br/>\
14.熊猫武僧<br/>\
<br/>\
擅长：近战、坦克、爆发<br/>\
获得方式：在宗教的战争中，一位伟大的信仰导师、灵魂的先行者熊猫武僧出现了。他来自社会的最底层——监狱。脱狱而出的熊猫武僧彻底原谅了曾经鞭打折辱他的胡人，转而把一种慈悲的观念灌输给了仇敌。以仇人的口舌来为善行宣告，以宽恕的心灵来为恶念超度。<br/>\
<br/>\
<br/>\
15.判官钟馗<br/>\
<br/>\
擅长：近战、游走、控制<br/>\
获得方式：8100金币/560点券/幸运转轮(2015.8.07-2015.8.13)<br/>\
英雄背景：玄宗年间，鬼门关崩毁，致使鬼物横行阳间，荼毒百姓。书生钟馗因机缘习得仙人法术，能画符捉鬼。钟馗嫉恶如仇，奈何人单力薄，救不了天下人，乃立志考取功名，借朝廷兵马驱除鬼物。<br/>\
<br/>\
<br/>\
16.诸葛亮<br/>\
<br/>\
擅长：远程、控制、爆发<br/>\
获得方式：8100金币/560点券/幸运转轮(2015.8.07-2015.8.13)<br/>\
英雄背景：气候的火烧博望、智取汉中、巧布八阵图、安居平五路……他以事实证明了他拥有自负的资本。 直至最后，明主已故，独留他一人支撑疲敝之国，呕心沥血，终究抵不过生老病亡。 七星灯已灭，名臣身亦亡，独留一股英雄在世间。 天下三分，终非我愿，奈何七星灯魂灭，徒留躯壳在人间…………<br/>\
<br/>\
<br/>\
17.血腥女王<br/>\
<br/>\
擅长：远程、爆发、推进<br/>\
获得方式：5500金币/320点券<br/>\
英雄背景：玛丽一世，都铎王朝的第四任君主，一位虔诚的天主教徒。然而，讽刺的是，在她死后，她的灵魂却不得安息——她被复活了，吸血鬼爱德华的鲜血一吻，让她以一种不洁的方式重生。 从此，她由虔诚的信徒变成了邪恶的吸血鬼，与黑暗为伍，以鲜血为食。<br/>\
';

var d=dataStr.split('<br/><br/><br/>');
for(var i=0;i<d.length;i++){
    var c=d[i].split('<br/><br/>');
    data.push({

        img:'images/'+i+'.jpg',
        caption:c[0].split('.')[1],
        desc:c[1]

    });

    //console.log(c[0].replace('.','')+'.jpg');
}




