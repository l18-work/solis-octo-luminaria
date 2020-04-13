const http = require('http');

//const hostname = '0.0.0.0';
//const hostname = '192.168.2.100';
const hostname = '127.0.0.1';
//const hostname = '127.0.0.1';
//const hostname ='111.89.221.74';
const port = 8080;
const lock8Regex =/(.*\.)?lock8\..*/;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('charset', 'utf-8');
  console.log(req.headers);
  console.log(req.headers.host);
  if (req.headers.host.match(lock8Regex) !== null) {
  res.end('<html lang="ja"><head><meta charset="utf8"><title>lock8.workも準備中</title></head><body style="writing-mode:vertical-rl;">' +
	  '<h1>SERVER DOWN NOTIFICATION (lock8はすぐちゃんとしたサーバソフトにします。l18とちがってダウンさせてなきゃいけないという要請はないようなのでw)--</h1>\n' +
	  '<a href="http://www.toei-anim.co.jp/tv/precure_alamode/character/"><img src="http://www.toei-anim.co.jp/tv/precure_alamode/images/character/precure/chara_01.jpg"></a><br>\n' +
	  '僕等は永遠の十二歳です。子供の心を大切にしよw<br>\n' +
	  '<a href="http://www.prideandhistory.jp/book-archive/book1/section1/chapter2/clause3/000230.html">言質がある</a>し。<br>\n' +
	  '…マッカーサーは朝鮮戦争中に独裁者と弾劾されて米軍から追い出された。自分が一番ガキだった。(だいたい神経質に人の悪口を言う人ってそうだよね。自分の欠点を人になすりつけてるだけだったりする。)<br>\n' +
	  '私たちはいずれにせよみんな子供です。百年も生きていないのだし。神々から見たら胎児みたいなものでしょう。<br>\n' +
	  '<br>\n' +
	  '<br>\n' +
	  '<br>\n' +
	  '<br>\n' +
	  '事務スタッフ&centerdot;レイ拝<br>\n<p style="text-align:center;">合掌</p><br>\n' +
	  '</body></html>');
  } else {
  res.end('<html lang="ja"><head><meta charset="utf8"><title>l18.work準備中</title></head><body style="writing-mode:vertical-rl;">' +
	  '<h1>SERVER DOWN NOTIFICATION--</h1>\n' +
	  '<i>Za desuthine-shon yuu a- bijithingu izu karentori- down.<br>\n' +
	  'uleito a mo-mento puri-zu.<br>\n' +
	  '<br>\n' +
          'humble site maintener rei@l18.work salutes you. thanks!<br></i>' +
	  '<p style="text-align:center;">अञ्जली</p><br>\n' +
	  '<br>\n' +
	  '<br>\n' +
	  '<br>\n' +
	  '<br>\n' +
	  'アナタガオコシニナッタURLハ ゲンザイてすとチュウデス<br>\n' +
	  'モウシバラク オマチクダサイ<br>\n' +
	  '<br>\n' +
	  'サイト準備担当レイ拝<br>\n<p style="text-align:center;">合掌</p><br>\n' +
	  '</body></html>');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
