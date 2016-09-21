$(document).ready(function() {
    var feed = new Instafeed({
        get: 'tagged', //ハッシュタグから取得
        tagName: '#味とめ食事部', //好きなハッシュタグを設定
        sortBy:'random', //並び順をランダムに
        links: true , //画像リンク取得
        limit: 3, //取得する画像数を設定
        resolution: 'low_resolution', //画像サイズを設定
        template: '<li><a href="{{link}}"><img src="{{image}}" target="_blank" /></a><span>{{caption}}</span><span>like:{{likes}},comments:{{comments}}</span></li>',
        clientId: 'b24b410a8d724942b564581d06238378', //Instagram DevelopersのクライアントID
        accessToken: '1321746919.b24b410.bee46765d19c44fa81357e3a0380de44' //アクセストークン
    });
    feed.run();
});