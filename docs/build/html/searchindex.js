Search.setIndex({docnames:["code/backend/index","code/crawler/index","code/database/index","code/frontend/index","code/meta/index","development/artifacts","development/conclusions","development/goals","development/process","development/sprint0/index","development/sprint1/index","development/sprint2/index","development/sprint3/index","development/suggestions","development/tools","guide/about","guide/installation","guide/updating","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,sphinx:56},filenames:["code/backend/index.rst","code/crawler/index.rst","code/database/index.rst","code/frontend/index.rst","code/meta/index.rst","development/artifacts.rst","development/conclusions.rst","development/goals.rst","development/process.rst","development/sprint0/index.rst","development/sprint1/index.rst","development/sprint2/index.rst","development/sprint3/index.rst","development/suggestions.rst","development/tools.rst","guide/about.rst","guide/installation.rst","guide/updating.rst","index.rst"],objects:{"":{Alert:[2,0,1,""],Authorization:[2,0,1,""],Composed:[2,0,1,""],Condition:[2,0,1,""],Contains:[2,0,1,""],MadeOf:[2,0,1,""],Notification:[2,0,1,""],Repository:[2,0,1,""],Tweet:[2,0,1,""],User:[2,0,1,""],nest_backend:[0,1,0,"-"],nest_crawler:[1,1,0,"-"]},"nest_backend.database":{base:[0,1,0,"-"],tables:[0,1,0,"-"]},"nest_backend.database.tables":{Alert:[0,0,1,""],Authorization:[0,0,1,""],Composed:[0,0,1,""],Condition:[0,0,1,""],ConditionMode:[0,0,1,""],ConditionType:[0,0,1,""],Contains:[0,0,1,""],MadeOf:[0,0,1,""],Notification:[0,0,1,""],OperationType:[0,0,1,""],Repository:[0,0,1,""],Tweet:[0,0,1,""],User:[0,0,1,""]},"nest_backend.database.tables.Alert":{__init__:[0,2,1,""],conditions:[0,3,1,""],evaluation_mode:[0,3,1,""],id:[0,3,1,""],limit:[0,3,1,""],name:[0,3,1,""],notifications:[0,3,1,""],repository:[0,3,1,""],repository_id:[0,3,1,""],to_json:[0,2,1,""],window_size:[0,3,1,""]},"nest_backend.database.tables.Authorization":{__init__:[0,2,1,""],email:[0,3,1,""],repository:[0,3,1,""],rid:[0,3,1,""],to_json:[0,2,1,""],user:[0,3,1,""]},"nest_backend.database.tables.Composed":{__init__:[0,2,1,""],repository:[0,3,1,""],rid:[0,3,1,""],snowflake:[0,3,1,""],tweet:[0,3,1,""]},"nest_backend.database.tables.Condition":{__init__:[0,2,1,""],alerts:[0,3,1,""],content:[0,3,1,""],id:[0,3,1,""],repository:[0,3,1,""],repository_id:[0,3,1,""],to_json:[0,2,1,""],tweets:[0,3,1,""],type:[0,3,1,""]},"nest_backend.database.tables.ConditionMode":{all_and:[0,3,1,""],all_or:[0,3,1,""]},"nest_backend.database.tables.ConditionType":{coordinates:[0,3,1,""],hashtag:[0,3,1,""],location:[0,3,1,""],place:[0,3,1,""],time:[0,3,1,""],user:[0,3,1,""]},"nest_backend.database.tables.Contains":{__init__:[0,2,1,""],cid:[0,3,1,""],condition:[0,3,1,""],snowflake:[0,3,1,""],tweet:[0,3,1,""]},"nest_backend.database.tables.MadeOf":{__init__:[0,2,1,""],aid:[0,3,1,""],alert:[0,3,1,""],cid:[0,3,1,""],condition:[0,3,1,""]},"nest_backend.database.tables.Notification":{__init__:[0,2,1,""],alert:[0,3,1,""],alert_id:[0,3,1,""],id:[0,3,1,""],ora:[0,3,1,""],to_json:[0,2,1,""]},"nest_backend.database.tables.OperationType":{assign:[0,3,1,""]},"nest_backend.database.tables.Repository":{__init__:[0,2,1,""],alerts:[0,3,1,""],authorizations:[0,3,1,""],conditions:[0,3,1,""],end:[0,3,1,""],evaluation_mode:[0,3,1,""],id:[0,3,1,""],is_active:[0,3,1,""],is_deleted:[0,3,1,""],name:[0,3,1,""],owner:[0,3,1,""],owner_id:[0,3,1,""],start:[0,3,1,""],to_json:[0,2,1,""],tweets:[0,3,1,""]},"nest_backend.database.tables.Tweet":{__init__:[0,2,1,""],conditions:[0,3,1,""],content:[0,3,1,""],image_url:[0,3,1,""],insert_time:[0,3,1,""],location:[0,3,1,""],place:[0,3,1,""],post_time:[0,3,1,""],poster:[0,3,1,""],repositories:[0,3,1,""],snowflake:[0,3,1,""],to_json:[0,2,1,""]},"nest_backend.database.tables.User":{__init__:[0,2,1,""],authorizations:[0,3,1,""],email:[0,3,1,""],isAdmin:[0,3,1,""],owner_of:[0,3,1,""],password:[0,3,1,""],to_json:[0,2,1,""],username:[0,3,1,""]},"nest_backend.gestione":{admin_or_403:[0,4,1,""],authenticate:[0,4,1,""],error_handler:[0,4,1,""],find_user:[0,4,1,""],gen_password:[0,4,1,""],hashtag_validator:[0,4,1,""],identity:[0,4,1,""],json_error:[0,4,1,""],json_request_authorizer:[0,4,1,""],json_success:[0,4,1,""],repository_auth:[0,4,1,""]},nest_backend:{database:[0,1,0,"-"],gestione:[0,1,0,"-"]},nest_crawler:{associate_condition_tweet:[1,4,1,""],authenticate:[1,4,1,""],is_coordinate_inside_bounding_box:[1,4,1,""],is_repo_alert_triggered:[1,4,1,""],search_repo_conditions:[1,4,1,""],send_notification_email:[1,4,1,""],send_notification_tweet:[1,4,1,""]}},objnames:{"0":["py","class","Python classe"],"1":["py","module","Python modulo"],"2":["py","method","Python metodo"],"3":["py","attribute","Python attributo"],"4":["py","function","Python funzione"]},objtypes:{"0":"py:class","1":"py:module","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"0000000000000000000000000":16,"000000000000000000000000000000000000000000000":16,"00000000000000000000000000000000000000000000000000":16,"00m":11,"10h":[9,10,11],"10m":[10,11],"11h":11,"11m":11,"125":13,"127":16,"12h":9,"12m":10,"12worwecx":9,"13h":10,"13m":[10,11],"14h":12,"14m":10,"15h":9,"15m":[10,11],"15o70ffe51cnj8ltkhc9dgiqrvnbv9upz":12,"16h":[10,11],"16m":10,"17h":[11,12],"17m":11,"18h":12,"18m":[10,11],"19h":11,"19m":10,"1dsis_cgcrnvgzakzjevizkt4nndkycaf":10,"1x1kub":11,"2021":[9,10,11,15],"20m":11,"21m":11,"22h":12,"23h":[9,10],"23m":10,"248":16,"25m":11,"26m":10,"27h":11,"28m":10,"29h":10,"29m":[10,11],"30040":16,"30041":16,"301":16,"30m":[9,10,11,12],"32m":10,"34m":[10,11],"35m":[9,10],"367":18,"36m":10,"375":18,"39m":[9,11],"40m":11,"42m":10,"443":16,"44m":11,"45m":11,"46m":10,"47m":11,"48m":10,"51m":11,"52m":9,"56m":10,"57m":11,"58m":10,"59m":10,"60min":16,"63072000":16,"7c2fm2vd":16,"andr\u00e0":7,"boolean":2,"ci\u00f2":[10,11,12],"class":[0,2],"default":2,"else":0,"enum":[0,2],"final":18,"for":[0,9],"function":0,"gi\u00e0":[10,12],"import":10,"null":2,"pu\u00f2":[2,13],"return":0,"static":14,"super":[2,9,10,11,12],"this":[0,16],"var":[6,10,13,16],"with":9,All:16,Dal:10,Gli:[2,7],Nel:16,Nello:[14,16],Noi:15,Non:[5,18],None:0,Per:[10,16,17],Una:[2,4,7,15,16],Uno:2,__init__:0,a_t:16,a_t_s:16,abil:16,abnormal:9,about:9,absent:9,accad:2,access:[14,16],accett:[9,10,11,12],accomod:10,according:0,account:[2,7],acme:16,acquis:6,actually:0,adatt:16,adds:0,adegu:[10,11],admin:2,admin_or_403:0,adott:13,advices:9,after:16,age:16,agent:7,aggiorn:[12,18],aggiunt:[7,10,11,12],aggreg:[7,10],aid:[0,2],alcun:[6,7,11,16],alert:[0,1,2,11,12],alert_id:[0,2],alerts:[0,9,12],algoritm:2,all_and:0,all_not:2,all_or:[0,2],allarm:[2,7],alleg:0,allegger:13,allert:[2,7,16],allowed:0,allows:0,almen:4,alon:0,altre:[9,10,11,12],altri:[7,10],altro:2,always:[9,16],ambient:[10,11,12,16],ambit:7,amministr:[7,16],analis:[2,7,9,10,12,14],analizz:7,ancor:[12,18],and:[0,2,9],andrann:11,any:[0,9],anyon:9,apac:18,apert:2,api:[10,11,12,15,16,18],app:16,appartenent:2,applic:[14,15,18],application:0,appost:16,approcc:11,approv:16,apr:18,april:18,arch:16,archiv:[2,7],are:[0,9],artefatt:18,artifacts:18,asks:9,assegn:13,assign:0,associate_condition_tweet:1,attiv:[2,6,7,16,18],attravers:[7,15],attributes:0,autent:[10,15],authentic:[0,1],authentication:0,authorization:[0,2],authorizations:0,automat:[14,16],autor:7,autorizz:[2,12,15],aver:[6,13,16],averag:9,avev:6,avvi:[0,7,16,17],backend:[0,10,15,17,18],background:16,backlog:[9,18],bas:[2,7,9,10,11,12],based:16,bash:16,basic:4,bat:4,bcrypt:2,becaus:0,behav:9,benven:18,better:9,bin:16,bisogn:[5,18],board:9,bord:7,bot:16,bozz:[9,10,11,12],bpvjrwmgrn5llu8ecqcbxfaokg:11,brainstorming:9,branc:[9,10,11,12],brev:18,bug:11,bugfixing:[10,11,12],bui:13,build:[4,16],buon:13,burndown:[10,11,12],bytearray:2,c_k:16,c_s:16,cach:16,calls:10,camb:10,camp:[12,18],cancell:[10,11],cap:10,caratter:16,caratterist:18,caric:13,cartell:[4,7,16],cas:[16,18],cases:[9,10],casual:16,cattur:11,centralizz:14,cer:16,cerc:2,cert:[2,7],cfu:13,chart:[10,11,12],check:9,checks:0,chiam:[10,14],chiav:10,chiusur:2,chown:16,ciascun:[6,8],cid:[0,2],circ:13,classes:0,classific:2,client:[7,9,10,11,12],clon:16,cod:[0,18],codebas:10,codic:[10,11,12,14,17,18],codific:2,coherent:9,collabor:[6,10,14],collegues:9,colonn:2,columns:0,com:[4,6,7,9,10,11,12,17,18],comand:16,combination:0,comod:13,comp:6,compar:16,compil:[12,18],compless:[10,16],complet:[9,10,11,12],completed:9,completing:9,component:[2,9,10],composed:[0,2],compost:15,comprens:15,compres:[9,10,11,12],comun:[14,15],comunic:12,concess:2,conclusion:[11,18],concord:[9,10,11,12,13],condition:[0,2],conditionmod:0,conditions:[0,11],conditions_typ:1,conditiontyp:0,condivid:7,condivision:7,condizion:[2,7,10,11,15],conferm:[9,10,11,12],config:16,configur:[7,9,10,11,12,18],configuration:4,conflitt:6,connession:16,conoscent:7,consegn:18,consent:2,consigl:16,constructed:0,constructor:0,consult:9,consumer:16,cont:[2,7],contains:[0,2],conten:[2,16],contenent:2,conteng:2,contenitor:2,content:[0,2],contien:2,continuous:4,contribution:9,controll:[10,14],cooper:9,cooperation:9,coordin:2,coordinates:[0,2],cop:16,cor:16,corpos:13,correct:0,corrett:[16,17],correzion:11,corrispond:13,cors:[10,15,18],cos:[2,4,5,6,9,10,11,12],costant:16,costru:10,could:[0,9],couldn:9,coverag:[11,14],crawler:[2,12,17,18],cre:[2,7,10,11,18],createdb:16,createuser:16,creating:16,creator:2,creazion:[2,7,9,10,11,12,14],cred:13,credentials:0,credenzial:16,criter:[9,10,11,12],css:9,curl:16,dark:9,dashboard:[9,11],dat:[0,2,4,7,9,10,11,12,15,16],databas:[9,10,11,15,18],dbms:16,deb:10,debt:9,decl_ap:0,declar:0,decreases:9,defin:[7,9,10,11,12],definit:9,definition:18,definizion:[2,9,10,11,12],dem:[11,16,18],denomin:16,depends:0,description:16,descrizion:9,desider:16,design:9,determin:[7,11],dettagl:[12,16],dev:7,development:18,diagramm:9,diar:8,differenc:9,dimestichezz:6,dipendent:[4,7,9,10,11,12,18],dir:[13,16],directory:[4,16,17],dirett:[7,13,16],direzion:13,discord:[9,14],discret:7,discuss:9,discussion:11,dispon:[0,4,9,10,11,16],disponessim:4,distanz:6,distribu:16,div:2,diven:2,divers:10,doa:16,docs:[0,4,12,16,18],document:[0,9,10,11,12,14],documentation:4,does:9,doesn:9,doing:9,don:18,dop:[2,16],doppiagg:9,dovr:16,dovrebb:16,dovrebber:13,driv:[9,10,11,12],driving:9,dsjiofgvinmodfiojvbnio3erfnoiweraqugu43ghjwrevniuwerng43iugnreuwignhritmj43i43nb8i42ug0wevkwovmwigtjj:16,due:7,dunqu:16,dur:[8,9,10,11,12],durant:[7,9,10,11,12,13],during:9,each:9,ecc:13,eccellent:6,eccess:13,edific:6,edit:16,effectiveness:9,effett:13,effettu:[6,7,10],efficent:10,efficiently:9,effort:9,elabor:15,element:[2,7],elenc:9,elimin:[2,7,10],email:[0,2,7,16],enabl:16,encourag:9,end:[0,2,9],engines:16,entit:[2,10],entrarv:16,entri:4,entro:2,entry:2,enumeration:0,env:16,environment:[4,16],epic:[7,9],error:[0,10,12,16],error_handler:0,errorunknownerror:0,esam:15,esecu:[14,16],esegu:[2,4,7,12,16,17],esemp:[10,16],esperient:7,espost:16,espress:12,esse:10,essend:7,esser:[2,7,12,16],essi:[2,7],esso:2,estend:[7,18],estern:16,estim:9,estraiam:15,evaluating:9,evaluation:9,evaluation_mod:[0,2],event:7,eventual:2,every:[9,16],everyon:9,evit:13,exampl:0,exec:16,execstart:16,explain:9,explorer:10,expr:16,express:9,ext4:18,facil:10,facing:9,fact:0,fallimentar:11,fancy:0,far:16,farl:16,fas:[7,13],features:12,feedback:7,feel:9,feels:9,figm:[9,10,14],fil:[9,11,12,18],files:12,filtr:7,fin:[6,10,16],finc:16,find_user:0,finestr:7,fix:[10,11,12],fixtures:11,flag:2,flask:15,flask_config:16,folders:10,forc:16,form:15,format:0,formatted:0,forn:[7,9,10,11,12,15,16],forwarded:16,foss:4,fosser:6,fram:9,framework:15,friendly:9,from:[0,9],frontend:[10,11,12,17,18],full:16,fullchain:16,fundamental:9,funzion:[10,12],funzional:[9,10,11,12,13,18],futur:[2,15],gam:9,gand:16,garant:6,gen_password:0,gener:[4,9,10,11,12,16,18],general:[9,10,12,18],generates:0,geograf:[7,12],geolocalizz:[10,11,12],gest:[0,15,16],gestion:[7,10,12,18],get:9,giorn:14,git:[9,14,16,17],github:[4,13],gitlab:[0,9,10,11,12,13,14,16],giust:13,glossar:18,gnu:18,goal:[9,18],goals:18,going:9,good:9,googl:[9,10,11,12],grad:[9,10,11,12],grafic:[7,14],gratuit:11,graz:10,grig:7,grooming:[10,18],gross:10,group:[9,16],grupp:[6,7,13],guid:16,gunicorn:16,hann:[6,9,10,11,12],happy:0,hash:0,hashed:0,hashtag:[0,2,7,10],hashtag_validator:0,header:16,help:9,helpful:9,higher:9,himself:9,hom:16,hosted:14,hosting:14,html:[4,9,16],http:[15,16],http_host:16,https:[9,10,11,12,14,16],ide:[5,9,10,14,18],ideas:9,identif:2,identity:0,illogin:10,illustr:16,image_url:[0,2],immagin:2,immediat:15,impar:6,impatt:10,impieg:9,implement:10,imports:0,impost:[2,16],incontr:[7,11,18],incorr:13,index:18,indic:[2,18],indipendent:[9,10,11,12],indirizz:[14,16],individu:7,inerent:10,infin:[4,7,17],info:10,inform:[2,16],informat:[7,15],ingles:12,initialization:0,iniz:[6,7,9,12,13],inizial:9,innesc:2,inoltr:2,inser:[2,5,11,12,16,18],insert_tim:[0,2],install:[4,18],instanc:0,instrad:13,integer:2,integr:[4,7,11,16],intellij:[10,14,18],inter:16,interfacc:[0,7,12,14,18],intern:[4,15,16],internet:16,interrott:7,interv:9,introdu:18,inutil:10,invi:[2,7,16],involved:9,is_act:[0,2],is_coordinate_inside_bounding_box:1,is_deleted:[0,2],is_repo_alert_triggered:1,isadmin:[0,2],isol:16,ispezion:2,issu:11,issues:11,istantane:14,ital:11,its:0,jest:12,jobs:9,journalctl:16,json:[0,10,16],json_error:0,json_request_authorizer:0,json_success:0,jsx:15,jwt:[0,16],keep:9,key:16,keys:0,keyword:7,know:9,knowledg:9,kwargs:0,lasc:11,latitud:1,lavor:[10,13],leads:9,learn:9,learned:9,left:9,leg:[2,10,12],legam:2,let:9,lettur:2,level:9,lezion:13,librer:16,licenz:4,light:9,limit:[0,2,10],lin:9,line:18,linguagg:6,link:[2,5,9,10,11,18],linux:[4,16],littl:0,local:[7,10,16],localizz:12,location:[0,2],log:[9,12,16],logg:10,logic:7,login:[0,7,10],longitud:1,lookup:16,loopback:16,lor:7,lost:9,lowest:9,macr:18,macroscop:7,madeof:[0,2],mag:18,magg:18,maggior:[9,10,11,12,16],mail:[2,16],main:[9,10,11,12],mak:18,makefil:4,makes:9,malfunzion:12,manag:10,management:[9,10,11,14],manipol:15,manten:[10,16],manual:[4,16],many:0,mapped:0,marcell:[9,10,11,12,18],master:9,matc:0,max:16,mechanics:9,member:9,members:9,membr:[6,9,10,11,12,14],men:2,mentr:[4,13],merg:[9,10,11,12],mess:2,messag:0,messaggist:14,met:18,method:0,metod:[10,12,18],metodolog:13,metric:9,mezz:7,miglior:[10,14],minutes:16,missirol:[9,10,11,12,18],mkdir:16,mnt:18,mockup:[9,10,11],mod:[7,9,10,14,16],model:0,modic:10,modif:[10,11,14],modul:[0,6,10,18],molt:[13,16],moment:[2,7,10],most:9,mostr:[7,15],mot:[12,16],motivation:9,msg:0,mult:16,multilinguagg:14,nam:[0,2],names:0,necess:16,necessar:[4,9,10,11,12,16],need:9,needs:0,nessun:16,nest:[16,17],nest_backend:[15,16,18],nest_crawler:[15,16,18],nest_frontend:[15,18],net:16,network:16,never:9,next:9,node_env:16,node_modules:16,node_version:16,nodejs:18,nom:[2,10,16],not:[0,2,9],notif:[2,7],notification:[0,2],notifications:[0,2,9],nozion:13,npm:16,nss:16,number:9,numer:[2,7],nuov:[2,6,7,11,12,18],nvm:16,oauth:10,obiett:[10,18],oggett:2,ogni:[2,12],onbootsec:16,one:[9,16],onlin:16,only:0,onunitactivesec:16,oper:16,operation:0,operationtyp:0,opinion:9,opinions:9,oppur:[2,7],opzional:2,ora:[0,2,9,10,11,16],orar:2,ore:[2,13],org:16,organiz:9,organizz:[6,10],original:18,orm:0,ospit:[4,14],other:9,ottimizz:16,output:10,ove:7,overrid:16,ovver:[2,11],owner:[0,9,10,11,12,16],owner_id:[0,2],owner_of:0,pacchett:16,pagin:9,pair:10,pandem:6,param:0,parametr:4,parents:16,parol:10,part:[7,10,11,14,15,18],partecip:[8,13],partenz:[2,12],participants:9,particol:[4,7],particolar:7,pass:11,password:[0,2,16],pawn:9,payload:0,penpot:9,perc:[11,16],percors:[16,18],perfect:9,period:16,permess:[2,6],permett:[2,4,7,11,12,13],pertant:16,perven:12,piacevol:13,piattaform:[2,7,14],piccol:[7,11,12],pien:16,plac:[0,2],place_id:11,plan:9,planning:9,platform:0,play:9,played:9,player:9,players:9,plugin:10,poetry:[4,16],poi:4,poic:13,point:9,poker:[9,12],poor:9,popol:16,port:16,porting:11,posizion:[2,7,12],poss:[2,16],possibil:[4,6,7,9,10,11,12,16],post:[2,12,13],post_tim:[0,2],poster:[0,2],postgres:16,postgresql:16,pot:[9,10,11,12],poter:10,potess:10,potr:7,potrann:7,powershell:18,practic:9,pratic:13,precedent:16,predic:7,predisporr:10,predisposizion:10,preferibil:16,prem:16,prepar:11,prerequis:18,present:[0,2,7,9,10,15],presenz:[2,6],preved:7,prim:[2,4,7,9,10,11,12,13,16],principal:[7,10],priorit:[9,10,11,12],priority:9,problem:9,problemat:13,proced:[6,16],process:[9,18],prod:16,prodott:[7,9],product:[9,10,11,12],production:16,prof:[9,10,11,12,13,18],progett:[4,7,9,10,12,13,14,16,17],programming:10,project:[9,10,11,14],pront:12,properly:9,proporzional:13,propr:[7,16],propriet:10,proprietar:2,prosegu:16,prot:16,protocols:16,prov:10,proxy:18,proxypass:16,proxypassrevers:16,pubblic:[2,7,11,16],pull:17,punt:[7,10],purtropp:6,put:11,puts:9,py3:16,pypoetry:16,pytest:11,python:[4,15,18],qual:[2,7,11,12,16],qualc:13,qualit:14,quality:9,qualor:[4,7,18],qualsias:7,quand:2,quant:16,quel:10,quell:[7,10],query:[11,12],quest:[2,4,9,10,11,12,13,16],question:9,questions:9,qui:[5,7,12,18],quind:13,raccogl:[7,9],raccolt:[2,7],radius:1,ragg:2,rappresent:[2,12,16],react:[15,18],readthedocs:4,ready:18,realizz:[9,10,11,15],recuper:15,recurs:16,refactor:10,refactoring:[10,11,12,14],refactory:12,registered:0,registr:18,regol:[7,13],regolar:7,relat:[2,4,7,9,12,18],relationships:0,relazion:10,rend:[13,16],rep:[2,10,11],repeat:9,repeatabl:9,report:12,repositories:[0,9],repository:[0,2,7,9,10,11,14,16],repository_auth:0,repository_id:[0,1,2],reqest:0,request_schem:16,requestheader:16,required:[0,9],res:6,resocont:9,rest:16,restart:17,restitu:10,restructuredtext:4,ret:16,retrieval:10,retrospect:[12,18],retrospett:[8,11,18],returned:0,returns:0,revers:18,review:18,rewriteengin:16,rewriterul:16,riavv:16,riavviin:17,ricerc:[7,10,11,12],ricev:[7,16],richied:2,richiest:[7,9,10,11,12,13,16],ricontroll:12,ricord:16,rid:[0,2],riemp:2,rig:[16,18],righ:2,riguard:10,rilev:7,rimanent:12,rimang:16,rimoss:7,rimozion:10,riport:7,riserv:2,risolt:11,risolu:11,rispett:[2,11],risult:18,ritien:6,ritm:6,ritocc:[9,10],ritorn:[10,11],riunion:6,riusc:11,roles:9,root:[16,17],routes:18,rp_app:16,rst:[12,18],run:[4,16],ruol:16,ryg:16,sacc:6,sal:2,salt:13,salv:[15,16],sar:[7,16],sarann:7,sarebb:13,sarebber:6,scanner:11,scaric:[17,18],scegl:7,scherm:[0,10,18],scop:7,screenshots:18,script:[4,16],scritt:[4,10,15],scrittur:[10,14],scriv:[5,18],scrum:[9,12],scrumbl:[13,18],search_repo_conditions:1,second:[11,15],secret:16,secret_key:16,security:16,see:16,segnal:[2,11],segret:16,segu:[7,12,17],seguent:[2,9,10,11,12,14,16,17],selezion:7,self:14,semplic:7,send_notification_email:1,send_notification_tweet:1,senz:[7,10],serenity:9,serializabl:0,serv:16,server:[0,15,16],servernam:16,servic:16,serviz:[17,18],session:[10,11,18],set:16,sets:0,settiman:8,setting:11,settings:9,setup:[11,16],shar:9,sharing:[9,10,11,12],shell:[4,16],shouldnt:0,sicurezz:16,simpl:0,sincron:14,sint:[12,16],sistem:[4,7,16],sit:10,situation:9,siz:9,smallint:2,smtp:16,smtp_from_email:16,smtp_host:16,smtp_password:16,smtp_usernam:16,snowflak:[0,2],soddisf:7,soddisfacent:7,soddisfatt:7,softw:[6,7,14,15],sogl:2,sol:16,solving:9,something:9,son:[2,6,7,12,14,16],sonarqub:[9,10,11,13,14,18],sorgent:[4,9,10,11,12,17,18],sort:6,sosten:6,sostitu:16,sottomodul:10,sourc:[4,18],speaks:9,spec:0,specif:[0,9,13],specific:10,sphinx:[4,12],spiegazion:13,sprint1:10,sprint2:11,sprint3:18,sprint:[7,18],sprints:9,sqlalchemy:[0,16],sqlalchemy_database_ur:16,srs:9,srv:16,sslcertificatefil:16,sslcertificatekeyfil:16,sslengin:16,stag:9,stamp:0,standard:4,standardizz:10,start:[0,2,16],stat:[2,6,7,8,9,10,11,12,13,14,16],statist:[7,15,18],stats:9,status:[16,17],steff:[14,16],stess:16,stesur:[9,10],stim:[9,10,11,12],stories:[9,10,12],story:[7,9,10,11,12],strict:16,string:[0,2,16],strument:[4,12,18],struttur:[4,6,10,18],stud:[10,12],success:[9,16],successful:0,such:0,suddivis:8,suddivision:18,sugger:[12,16,18],suggestions:9,support:[10,12,16],sur:9,svilupp:[2,7,9,10,11,12,14,18],svolg:6,svolt:10,swagger:[0,11],system:0,systemctl:[16,17],systemd:18,tabell:2,taig:[9,10,11,14],talks:9,talvolt:16,target:[4,16],task:[10,11,12],tasks:9,tast:16,tastier:16,team:[6,9,10,11,12,13,14],technical:9,tecnic:[10,12,13,16],telemat:7,temp:[2,9],temporal:7,ten:2,tentat:11,ter:18,termin:[7,9,10,11,18],terz:12,test:[9,10,11,12,16],tester:[9,10,11,12],testing:[10,11,14],tests:11,that:0,the:[0,9,16],thes:0,they:9,thing:0,thingamajigs:0,throughout:9,tim:[0,2,9],timer:[17,18],timers:16,timestamp:2,tip:[2,10],tipolog:7,to_json:0,token:16,tool:13,topic:9,total:[9,10,11,12],totally:9,tracc:[2,14],traduzion:[11,12],tram:[7,10,12,16],transport:16,trasfer:12,tre:[7,15],trigger:2,trov:[4,7,18],tru:2,tutt:[6,7,9,10,11,12,14,16,17],tweepy:15,tweet:[0,1,2,7,10,11,12,15,16],tweet_latitud:1,tweet_longitud:1,tweets:0,twitter:[2,7,9,10,12,15,16],type:[0,2,16],typo:12,uf2up4_lneoovhzpvr77msg:9,ulterior:[11,12],ultim:[2,4,9,10,14],uml:7,understand:9,uniform:9,uniformity:9,unimor:15,unit:16,univoc:2,unrepeatabl:9,usa:16,usand:[2,15],usat:[2,14],use:9,used:0,user:[0,2,4,7,9,10,11,12,16],useradd:16,usernam:[0,2],users:[10,11],using:0,uso:[16,18],usp:[10,11,12],usr:16,utent:[2,10,11,15],util:13,utility:18,utilizz:[2,7,10,11,13,16,18],utlizz:13,valid:0,valor:2,valu:0,values:0,valut:[10,11,12],valutazion:10,varc:2,variabil:16,ved:[0,16],veloc:6,ven:[2,10],veng:[7,16,18],venv:[4,16],verif:[16,17],verification:0,verr:16,verrann:7,version:[4,9,11,14,16],vide:[5,9,10,11,12,18],vien:2,view:[9,11,12],vim:16,virtual:4,virtualenv:16,virtualenvs:16,virtualhost:16,visibil:[10,11,12],vision:[9,10,11,12],vist:[7,10,13],visualizz:[7,14,15],vocal:14,volt:[0,2,4,7,10,16],want:0,wantedby:16,wants:[9,16],was:0,web:[14,15,16,18],webserver:0,well:9,what:9,when:9,whether:0,willing:9,window_siz:[0,2],windows:18,wis:9,working:16,workingdirectory:16,you:[0,16]},titles:["<code class=\"docutils literal notranslate\"><span class=\"pre\">nest_backend</span></code> - Web API in Python","<code class=\"docutils literal notranslate\"><span class=\"pre\">nest_crawler</span></code> - Crawler in Python","Struttura del database","<code class=\"docutils literal notranslate\"><span class=\"pre\">nest_frontend</span></code> - Interfaccia utente in React","Meta-documentazione","Artefatti","Conclusioni","Introduzione","Processo di sviluppo","Sprint 0: 04 Apr - 18 Apr","Sprint 1: 19 Apr - 02 Mag","Sprint 2: 03 Mag - 16 Mag","Sprint 3: 17 Mag - 30 Mag","Suggerimenti relativi al corso","Strumenti utilizzati","Il progetto in breve","Installazione","Aggiornamento","N.E.S.T."],titleterms:{"final":12,aggiorn:17,altri:18,anniball:[9,10,11,12],apac:16,api:0,applic:7,apr:[9,10],april:8,artefatt:[5,9,10],attiv:[9,10,11,12],backend:16,backlog:[7,10,11,12],balugan:[9,10,11,12],bas:0,brev:15,burndown:8,calzolar:[9,10,11,12],camp:7,caratterist:7,cas:7,chiar:[9,10,11,12],cocc:[9,10,11,12],codic:16,colleg:18,collett:[9,10,11,12],com:16,compil:[4,16],conclusion:6,configur:16,consegn:[9,10,11,12],cors:13,cos:18,crawler:[1,16],cre:16,databas:[0,2,16],definition:[9,10,11,12],dem:[5,12],dipendent:16,document:[4,18],don:[9,10,11,12],estension:0,far:[5,7,12,18],fil:16,flask:0,flav:[9,10,11,12],frontend:16,funzional:7,general:[7,8],gestion:0,giorg:[9,10,11,12],giovann:[9,10,11,12],gitinspector:[9,10,11,12],glossar:7,gnu:4,goal:[10,11,12],goldon:[9,10,11,12],grooming:12,ide:4,individual:[9,10,11,12],install:16,intellij:4,interfacc:3,introdu:7,lorenz:[9,10,11,12],macr:7,mag:[10,11,12],magg:8,mak:4,manual:18,met:4,metod:0,minoccar:[9,10,11,12],modul:15,nest_backend:0,nest_crawler:1,nest_frontend:3,nodejs:16,nuov:16,obiett:7,part:9,percors:0,pigozz:[9,10,11,12],powershell:4,prerequis:16,process:8,progett:[15,18],proxy:16,python:[0,1,16],react:3,ready:[9,10,11,12],registr:[9,10,11,12],relat:13,relazion:18,retrospect:[9,10,11],retrospett:12,revers:16,review:[9,10,11],rimast:18,risult:9,riunion:[9,10,11,12],routes:0,scaric:16,scherm:12,screenshots:15,scrumbl:9,serviz:16,session:12,sonarqub:12,sorgent:16,sprint:[8,9,10,11,12],statist:[9,10,11,12],stef:[9,10,11,12],strument:14,struttur:2,suddivision:15,sugger:13,svilupp:8,systemd:16,tabell:0,tables:0,tecnic:18,timer:16,total:8,uso:7,utent:[3,7,16,18],utility:0,utilizz:14,web:0,windows:4}})