const app='tango';
const titulo1='Only Tango Links Asia (OTLA) V9.1';
const titulo2=`아시아 유일의 탱고 링크 &#128518; 亚洲唯一的探戈舞场 &#128518; アジア唯一のタンゴリンク<br/>`;

// mapa colores por tipo
const colorTipo=new Map();
// agendar
colorTipo.set('listevents','#ead764');
colorTipo.set('address','#ffd469');
colorTipo.set('milonga','#adf5d7');
colorTipo.set('listmilongas','#aFf5d7');
colorTipo.set('spot','#cff7f9');
// eventos
colorTipo.set('event party','#e5f9ff');
colorTipo.set('event festival','#ceeefe');
colorTipo.set('event festival','#c3e8ff');
colorTipo.set('event encuentro','#7db1ff');
colorTipo.set('event marathon','#acccfc');
// people
colorTipo.set('dj','#db94ff');
colorTipo.set('artist','#e4ddff');
colorTipo.set('organizer','#ebc4ff');
colorTipo.set('writer','#F9EE90');

// area,ciudad,festival/marathon,name,dates,link
/*
usamos . para que esten los primeros en los selectores
usamod 1) para ordenara los meses

*/

/*
tipo:
-agenda listevents: fechas de eventos
-agenda listmilongas: fechas de listmilongas
-address milonga: lista de las listmilongas solo con la direccion sin fechas
-festival name: mas de dos dias con artistas
-marathon name: sin artistas, mas de dos dias
-event encuentro name: no mas  de 9 horas al dia sin artistas mas de dos dias
-milonga name: una milonga en concreto
-spot name: un lugar para milonga
-party: only one special day for a milonga 1 or 2 dias
-organizer
-writer
-artist
*/

const datos=[
// eventos
['China','Beijing','event marathon','Beijing Tango Marathon “Ideal” - Shen Alec & Frank Jin & Robin Liu','(09)SEP 19-21.2025',''],
['China','Hangzhou','event festival','Qian Tang JinSha Tango Live Concert & Festival - Lily & Randy','(11)NOV 7-9.2025',''],
['China','Hangzhou','event festival','Tango Blast - Aeon','(08)AUG 21-25.2025',''],
['China','Hangzhou','event festival','Hangzhou Tango Festival - Emily & Mauro Mauceri','(09)SEP 12-14.2025',''],
['China','Hong Kong','event encuentro','festivalito de tango','','https://www.festivalitodetangoenhk.com/'],
['China','Hong Kong','event festival','','','https://www.facebook.com/groups/893294940758452/'],
['China','Hong Kong','event marathon','Hong Kong Tango Marathon - Daisy Tsang','(11)NOV 14-16.2024',''],
['China','Qingdao','event festival','Tango Caravan - Liu Zheng','(10)OCT 24-26.2024',''],
['China','Qingdao','event festival','tango caravan','','https://www.enjoytango.com/app/show.php?aid=1778'],
['China','Shanghai','event festival','Shanghai International Tango Festival','','https://www.facebook.com/Shanghaitangofest/'],
['China','Shanghai','event marathon','','','https://tangomarathonshanghai.com/'],
['China','Shanghai','event marathon','','','https://tangomarathonshanghai.com/'],
['China','Shanghai','event marathon','Shanghai Tango Marathon - Perni Peng & Sergiy Podbolotnyy','(11)NOV 20-23.2024',''],
['China','Shanghai','milonga','Te Amo Tango Lounge','','https://www.facebook.com/pages/Te%20Amo%20Tango%20Lounge/1073822006087515/'],
['China','Shenyang','event festival','Shenyang Summer Ice & Snow Tango Weekend - CoCo Feng','(08)AUG 15-17.2025',''],
['China','Xian','event festival','tango festival','','https://mp.weixin.qq.com/s/qCTx9sQdv4bkGptTXcl94w'],
['China','Xian','event festival','Xian Tango Festival - Jezebel Dang','(10)OCT 23-26.2025',''],
['China','Xian','event festival','Xian Tango Festival','','https://jsj.top/f/eASFWZ'],
['India','Goa','event festival','Goa International Tango Festival - Shashank Duggal','(11)NOV 14-16.2024','https://goatangofestival.com/'],
['Indonesia','Bali','event festival','Bali Tango Holidays','','https://www.facebook.com/listevents/928812899180878/'],
['Korea','Bundang','milonga','Lovely Milonga','',''],
['Korea','Busan','event marathon','Tango WK El Mar - Chanbee Bokchan Park','(08)AUG 28-01.2024','https://www.facebook.com/groups/1447122242510285'],
['Korea','Busan','milonga','Milonga y tu - Anna Seo','','https://www.facebook.com/milongaytu'],
['Korea','Changwon','milonga','Marine Milonga','','https://www.facebook.com/groups/515183163127903/?ref=share&mibextid=NSMWBT'],
['Korea','Changwon','event party','Querencia 6th Anniversary Party - Changwon Tango','','https://www.facebook.com/photo?fbid=31808965928747096&set=pcb.31808967058746983'],
['Korea','Changwon-si','milonga',"Papa's 6th",'','https://www.facebook.com/bonghan.choi.2025'],
['Korea','Cheongju','milonga','Aura','.REGULAR mensual','https://www.facebook.com/photo/?fbid=3107196966126499&set=a.409473605898862'],
['Korea','Cheongju','milonga','La plata','','https://www.facebook.com/photo/?fbid=3193310814181780&set=pcb.24650652021212149'],
['Korea','Cheongju','spot','Studio Aura - Sofia Yeoreum','','https://www.facebook.com/groups/860898317280853'],
['Korea','Chuncheon','event marathon','','','https://www.facebook.com/groups/413601948060266'],
['Korea','Chuncheon','event marathon','ChunCheon Tango Marathon - John','(10)OCT 9-12.2024',''],
['Korea','Daegu','event marathon','Daegu Tango Marathon','(11)NOV 1-4.2024','https://www.facebook.com/doya.doya.710'],
['Korea','Daegu','milonga','Daegu Tango Mariposa - Nabi Nabi','.REGULAR','https://www.facebook.com/photo/?fbid=1803902373671693&set=a.114472835947997'],
['Korea','Daegu','milonga','Doya Doya','','https://www.facebook.com/groups/156014731398037'],
['Korea','Daejeon','milonga','Azucar Sunday','','https://www.facebook.com/photo/?fbid=2015452378991086&set=a.161741304362212'],
['Korea','Daejeon','milonga','Caminito','.REGULAR','https://www.facebook.com/caminito.kr'],
['Korea','Daejeon','milonga','La Vista','','https://www.facebook.com/photo?fbid=2255211238235751&set=pcb.2255211264902415'],
['Korea','Daejeon','milonga','TangoO Nada - Jin','','https://www.facebook.com/groups/1372855000218884/?ref=share&mibextid=NSMWBT'],
['Korea','Daejeon','spot','Azucar','','https://www.facebook.com/milonga.azucar'],
['Korea','Daejeon','spot','La Boom','','https://www.facebook.com/photo/?fbid=2251057871984421&set=a.726254241131466'],
['Korea','Gyeongju','milonga','Libertango','.REGULAR','https://cafe.daum.net/LiberTango'],
['Korea','Jeju','event marathon','Jeju Summ Milonga','','https://www.jejusummmilonga.com/'],
['Korea','Jeju','milonga','Jeju Summ Milonga - Kim Seong Gong & Augusto Kim','(08)AUG 22-24.2025',''],
['Korea','Jinju','milonga','Jinju Yudeung Milonga','.REGULAR','https://www.facebook.com/jinju.yudeung.milonga'],
['Korea','Pohang','','','',''],
['Korea','Seoul','milonga','Tango Club Ocho - Jin','','https://www.facebook.com/groups/1372855000218884/?ref=share&mibextid=NSMWBT'],
['Korea','Seoul','listmilongas','agenda (by Beto)','','https://www.facebook.com/photo/?fbid=10234365656896519&set=pcb.1130362382627379'],
['Korea','Seoul','spot','Andante','','https://www.facebook.com/tango.andante'],
['Korea','Seoul','spot','En Paz','','https://www.facebook.com/groups/1139011689765653'],
['Korea','Seoul','spot','Pista Tango','','https://www.facebook.com/jiyu.banny'],
['Korea','Suncheon','event marathon','Tango Chang','','https://www.facebook.com/groups/156014731398037'],
['Korea','Suncheon','event party','Big Milonga Estrellas - BongBong & Miae Na','(09)SEP 20-21.2025',''],
['Malaysia','','','','',''],
['Philippines','','','','',''],
['Singapore','Singapore','event marathon','tm','','https://www.facebook.com/groups/1595489810766319/?action_source=group_mall_recommendation_affordance'],
['Taiwan','Taipei','event festival','Taipei Tango Festival - Liu Hsin-Yueh','(09)SEP 18-21.2025',''],
['Taiwan','Taipei','event festival','Taipei Tango Festival','','https://www.taipeitangofestival.com/'],
['Taiwan','Taipei','event marathon','Taiwan Tango Marathon - Yutan Lin & Lin Yushsun','(12)DEC 26-28.2025',''],
['Taiwan','Taipei','event marathon','Taiwan Tango Marathon','','https://twtangomarathon.com/'],
['Taiwan','Taipei','milonga','Tango Association','','https://tangotaiwan.weebly.com/'],
['Taiwan','Taipei','event party','Taiwan Tango Weekend (TTW) - Grace Liman Chan & Sheen Chan','(10)OCT 24-26.2025','https://www.facebook.com/groups/352638425112464/'],
['Vietnam','','event marathon','Vieertman Tango Marathin 2026 VTM8','(04)APR 2-6.2026','https://www.facebook.com/listevents/1313873586902724/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22group%22%7D]%7D'],
['Vietnam','Hanoi','event encuentro','La Luna Tango event encuentro - Nguyen Phuong Ngoc','(10)OCT 30-2.2025','https://www.laluna-event encuentro.com/'],
['Japan', 'Tokyo', 'event festival', 'Japan Tango Festival','(07)JUL 19-21.2025','https://japan-tango-festival.com/en-index'],
['Japan', 'Tokyo', 'event festival', 'Japan Tokyo Festival','(11)NOV 22-25.2024','https://www.tangofestivalentokyo.com/guest-artists/ '],
//listados
['.World','.area','listevents','agenda','','https://tangocat.net/'],
['Asia','.area','listevents','agenda (incomplete)','','https://www.facebook.com/photo/?fbid=10233487171534934&set=pcb.1070085518655066'],
['China','.area','listevents','agenda (incomplete)','','https://www.enjoytango.com/app/list.php?tid=2'],
['China','.area','listmilongas','agenda (incomplete)','','https://www.enjoytango.com/app/list.php?tid=1'],
['Taiwan','.area','listevents','agenda','','https://milonga.tw/'],
['Korea','Busan','listmilongas','agenda (by Beto)','','https://www.facebook.com/photo/?fbid=10211432120996912&set=pcb.10161231380052488'],
['Korea','Busan','listmilongas','address (by Beto)','','https://www.facebook.com/photo/?fbid=10231129175306502&set=gm.919471050383181&idorvanity=466828892314068'],
['Japan','.area','listmilongas','agenda','','https://latin.world.coocan.jp/tangocalender.htm'],
['Korea','.area','listmilongas','agenda (old)','','https://sites.google.com/view/tangomilongaincorea/where-are-you-now?authuser=0'],
['Korea','.area','listmilongas','agenda (pdf-ko by sunshine)','','doc/ctk.pdf'],
['Korea','.area','listmilongas','agenda (txt-en by sunshine )','','doc/ctkdir.txt'],
['China','Beijing','listmilongas','agenda','','https://mp.weixin.qq.com/s/0tfkvbCKHPF4PDimWNmUgA?poc_token=HLce5Gij6-5hh6PLEdX3IEyAjBQkK_6UVK5hpuw9'],
// artist
['Korea','Seoul','artist','Eva Youn Christina','','https://www.facebook.com/evayoun'],
['Korea','Seoul','artist','Misun Kang','','https://www.facebook.com/msddr'],
//dj
['Korea','Seoul','dj','Alex Jonghwa Lee','','https://www.facebook.com/alex.jonghwa.tangodj/'],
//organizer
['Taiwan','Taipei','organizer','Sheen Chan','','https://www.facebook.com/lovesheen'],
['Taiwan','Taipei','organizer','Grace Liman Chan','','https://www.facebook.com/Gracechan1028'],
['Korea','Suncheon','organizer','BongBong','','https://www.facebook.com/profile.php?id=100002148016502'],
['Korea','Suncheon','organizer','Miae Na','','https://www.facebook.com/miae.na.5'],
['Korea','Seoul','organizer','Aran Sunmi Kang - En Paz','','https://www.facebook.com/aran.sunmikang/photos'],
['Korea','Seoul','organizer','Hyun Jung Kim - Luminoso','','https://www.facebook.com/luminoso.trees'],
['Korea','Jeju','organizer','Augusto Kim (태양)','','https://www.facebook.com/augusto.t.kim'],
['Korea','Jeju','organizer','Kim Seong Gong (김성공)','','https://www.facebook.com/gimseong.gong.126054'],
['Korea','Gwangju','organizer','Kim Woo-jung','','https://www.facebook.com/woojeong.kim.julian/'],
['Korea','Daejeon','organizer','Diego Ki - La Boom','','https://www.facebook.com/diego.ki.5'],
['Korea','Daejeon','organizer','Jeong Hoe Gyeong - Caminito','','https://www.facebook.com/jeonghoegyeong.326236/'],
['Korea','Daejeon','organizer','Jin Milonga','','https://www.facebook.com/groups/1372855000218884/?ref=share&mibextid=NSMWBT'],
['Korea','Cheongju','organizer','Sofia Yeoreum - Studio Aura','','https://www.facebook.com/sofia.yeoreum/'],
['Korea','Daegu','organizer','Nabi Nabi','','https://www.facebook.com/nabi.nabi.397220'],
['China','Shanghai','organizer','Kai Wang','','https://www.facebook.com/kaiwang215'],
['Korea','Changwon','organizer','Bonghan Choi - Querencia','','https://www.facebook.com/bonghan.choi.2025'],
['Korea','Changwon','organizer','Tango Parkmi','','https://www.facebook.com/taeng.gobagmi/'],
['Korea','Seoul','organizer','IF Kim - IF milonga','','https://www.facebook.com/johwan.kim.77/'],
['Korea','Seoul','organizer','Kogsan Kyuho Kim - TangoLife','','https://www.facebook.com/kogsan.kyuho.kim'],
['Korea','Busan','organizer','Anna Seo ','','https://www.facebook.com/anna.seo.362388'],
['Korea','Busan','organizer','Chanbee Bokchan Park','','https://www.facebook.com/bokchan.park'],
//writer
['Korea','Seoul','writer','Beto Kim','','https://www.facebook.com/byeoungjun.kim.9'],
// comunidad tango korea
['Korea', 'Seoul', 'milonga', 'Gangnam Tango Pan','.REGULAR','https://cafe.daum.net/BTF'],
['Korea', 'Seoul', 'milonga', 'Nova Tango','.REGULAR','https://band.us/@novatango'],
['Korea', 'Seoul', 'milonga', 'Moonlight Tango','.REGULAR','https://cafe.naver.com/thestep201'],
['Korea', 'Seoul', 'milonga', 'Todotango','.REGULAR','https://cafe.daum.net/TODOTANGO'],
['Korea', 'Seoul', 'milonga', 'Lime Tango','.REGULAR','https://cafe.daum.net/limetangoca'],
['Korea', 'Seoul', 'milonga', 'Tango Club LnT','.REGULAR','https://cafe.daum.net/LnT'],
['Korea', 'Seoul', 'milonga', 'El Tango','.REGULAR','https://cafe.daum.net/eltangocafe'],
['Korea', 'Seoul', 'milonga', 'Hola Tango','.REGULAR','https://band.us/@holatango'],
['Korea', 'Seoul', 'milonga', 'Gangnam Tango Life','.REGULAR','https://cafe.naver.com/tangolife'],
['Korea', 'Seoul', 'milonga', 'Tango PG','.REGULAR','https://cafe.daum.net/tangopg'],
['Korea', 'Seoul', 'milonga', 'Tango People Bangbae','.REGULAR','https://cafe.daum.net/tango-peopl'],
['Korea', 'Seoul', 'milonga', 'Tango Honey','.REGULAR','https://cafe.naver.com/tangohoney'],
['Korea', 'Seoul', 'milonga', 'Senior Argentino','.REGULAR','https://www.band.us/@bnscoben'],
['Korea', 'Seoul', 'milonga', 'Tango Attaniche* (DJ classes)','.REGULAR','https://cafe.daum.net/tangoxtango'],
['Korea', 'Seoul', 'milonga', 'AB Tango','.REGULAR','https://cafe.daum.net/ArBosqueTa'],
['Korea', 'Seoul', 'milonga', 'Tango Cafe','.REGULAR','https://cafe.naver.com/useserver'],
['Korea', 'Seoul', 'milonga', 'Dinamico','.REGULAR','https://cafe.daum.net/lapassiontan'],
['Korea', 'Seoul', 'milonga', 'Viva Tango','.REGULAR','https://cafe.daum.net/vivatango'],
['Korea', 'Seoul', 'milonga', 'Seoul Argentina Tango Academy','.REGULAR','https://cafe.naver.com/tangoacade'],
['Korea', 'Seoul', 'milonga', 'Solo Tango','.REGULAR','https://cafe.daum.net/latindance'],
['Korea', 'Seoul', 'milonga', 'Swing Sisters','.REGULAR','https://cafe.daum.net/swingsisters'],
['Korea', 'Seoul', 'milonga', 'Studio Eli','.REGULAR',''],
['Korea', 'Seoul', 'milonga', 'Arte Tango','.REGULAR',''],
['Korea', 'Seoul', 'milonga', 'Angel Tango','.REGULAR','https://cafe.daum.net/AngelTango'],
['Korea', 'Seoul', 'milonga', 'Elbulin Tango','.REGULAR','https://cafe.daum.net/elbulin'],
['Korea', 'Seoul', 'milonga', 'Unpocodeta Tango','.REGULAR','https://cafe.naver.com/unpocodeta'],
['Korea', 'Seoul', 'milonga', 'Chloe Tango','.REGULAR',''],
['Korea', 'Seoul', 'milonga', 'Tango Brujo','.REGULAR','https://cafe.daum.net/tangobrujo'],
['Korea', 'Seoul', 'milonga', 'Tango Simba','.REGULAR','https://cafe.daum.net/nuevoclass'],
['Korea', 'Seoul', 'milonga', 'Tango People Hongdae','.REGULAR','https://cafe.daum.net/tango-peopl'],
['Korea', 'Seoul', 'milonga', 'Tango BA','.REGULAR','https://cafe.daum.net/tangoba'],
['Korea', 'Seoul', 'milonga', 'Freestyle Tango','.REGULAR','https://cafe.daum.net/freestyletan'],
['Korea', 'Seoul', 'milonga', 'Flor Tango','.REGULAR','https://cafe.daum.net/flortangoacademy'],
['Korea', 'Suwon', 'milonga', "Everyone\'s Tango",'',''],
['Korea', 'Suwon', 'milonga', 'Sua Tango','.REGULAR','https://cafe.daum.net/tangosuwon'],
['Korea', 'Suwon', 'milonga', 'Cuba Tango','.REGULAR',''],
['Korea', 'Bundang', 'milonga', 'Tango Vuelo','.REGULAR','https://cafe.daum.net/tangovuelo'],
['Korea', 'Anyang', 'milonga', 'Anyang Tango','.REGULAR','https://cafe.daum.net/anyangtango'],
['Korea', 'Uijeongbu', 'milonga', 'Ignox','.REGULAR','https://cafe.naver.com/ignox'],
['Korea', 'Pyeongtaek', 'milonga', 'Senior Tango','.REGULAR','https://www.band.us/@bnscoben'],
['Korea', 'Daejeon', 'milonga', 'Caminito','.REGULAR','https://caminito.kr/'],
['Korea', 'Daejeon', 'milonga', 'Onada Daejeon','.REGULAR',''],
['Korea', 'Daejeon', 'milonga', 'Tanggenmi','.REGULAR','https://cafe.daum.net/daejeontang'],
['Korea', 'Daejeon', 'milonga', 'Laboom','.REGULAR','https://cafe.daum.net/djtango'],
['Korea', 'Daejeon', 'milonga', 'Tango Tree','.REGULAR','https://cafe.daum.net/tangonamoo'],
['Korea', 'Daejeon', 'milonga', 'SDT','.REGULAR','https://cafe.daum.net/sdtdance'],
['Korea', 'Daejeon', 'milonga', 'Asuka','.REGULAR','https://cafe.daum.net/azucar'],
['Korea', 'Cheonan', 'milonga', 'Cheonan Tango','.REGULAR','https://cafe.daum.net/Cheonantan'],
['Korea', 'Cheongju', 'milonga', 'Cheongju Tango Love','.REGULAR','https://cafe.daum.net/tangoyo'],
['Korea', 'Cheongju', 'milonga', 'La Plata','.REGULAR','https://cafe.daum.net/Cjtango/OlZi'],
['Korea', 'Cheongju', 'milonga', 'Abrazo','.REGULAR','https://cafe.daum.net/arbazo2014/'],
['Korea', 'Daegu', 'milonga', 'Mariposa','.REGULAR','https://cafe.naver.com/mariposana'],
['Korea', 'Daegu', 'milonga', 'Tango Viento','.REGULAR','https://cafe.daum.net/tango-Viento'],
['Korea', 'Daegu', 'milonga', 'Abrazo','.REGULAR','https://cafe.daum.net/iloveCUBA'],
['Korea', 'Daegu', 'milonga', 'Carnival','.REGULAR',''],
['Korea', 'Busan', 'milonga', 'Gatto Tango','.REGULAR','https://cafe.daum.net/GatotangO'],
['Korea', 'Busan', 'milonga', 'Caliente','.REGULAR','https://cafe.daum.net/CalienteTango'],
['Korea', 'Busan', 'milonga', 'Corteno','.REGULAR','https://cafe.daum.net/tangoacade'],
['Korea', 'Busan', 'milonga', 'Tangbi','.REGULAR','https://cafe.daum.net/tangostart'],
['Korea', 'Busan', 'milonga', 'Busan Tango','.REGULAR','https://cafe.daum.net/pusantango'],
['Korea', 'Busan', 'milonga', 'Puerto Tango','.REGULAR','https://cafe.daum.net/latindance'],
['Korea', 'Busan', 'milonga', 'Cafe de Tango','.REGULAR','https://www.cafedetango.com'],
['Korea', 'Busan', 'milonga', 'Tango People Busan','.REGULAR','https://cafe.daum.net/busantango'],
['Korea', 'Changwon', 'milonga', 'Parkmi Tango','.REGULAR','https://cafe.daum.net/dance0088'],
['Korea', 'Changwon', 'milonga', 'Hentede Tango','.REGULAR','https://cafe.daum.net/absorbedby'],
['Korea', 'Pohang', 'milonga', 'Pos Tango','.REGULAR','https://cafe.daum.net/pohangtang'],
['Korea', 'Jinju', 'milonga', 'Tango Amor','.REGULAR','https://cafe.daum.net/jinamor'],
['Korea', 'Jinju', 'milonga', 'Tango People Jinju','.REGULAR','https://cafe.daum.net/jinjutangopeople'],
['Korea', 'Gwangju', 'milonga', 'Contango','.REGULAR','https://cafe.daum.net/contangoclub'],
['Korea', 'Gwangju', 'milonga', 'Libertango','.REGULAR','https://cafe.daum.net/LiberTango'],
['Korea', 'Suncheon', 'milonga', 'Suncheon Tango','.REGULAR','https://cafe.daum.net/suncheonta'],
['Korea', 'Suncheon', 'milonga', 'Sueño','.REGULAR','https://cafe.daum.net/kks6366'],
['Korea', 'Jeju', 'milonga', 'Olle Tango','.REGULAR','https://cafe.daum.net/tangojj'],
['Korea', 'Jeju', 'milonga', 'Cortina Flow','.REGULAR',''],

// add
/*
https://www.facebook.com/gaeakim07 ; https://www.facebook.com/gaeakim07

chongqing hmmmmm chongqing has some events, one very danceable, in December
taipei is nice but not so nice as mainland china to my taste
Guangzhou 
Chuncheon festival ; 
Daegu Tango Marathon https://www.facebook.com/doya.doya.710
El gordo maratones ; https://www.facebook.com/olga.makhno.7
TTW ; https://www.facebook.com/Gracechan1028/about
 Blue Longgo Dress Chuncheon Longgo Marathon

*/
];
