function toggle (id) {
				var hide1=document.getElementById(id);
				if (hide1.style.display=="none")
					{

						hide1.style.display="block";
					}
				else
					{
						hide1.style.display="none";
					}
				// body...
			}
			function GetID(str){
				return document.getElementById(str);
			}
			function NetCore(){
				//creat top-head
				var create_head=document.createElement("div");
				create_head.className="head";
				create_head.innerHTML="NetCore";
				document.body.appendChild(create_head);

				//create menu
				var menu=document.createElement("div");
				menu.className="menu_list";
				menu.id="menu_list1"
				document.body.appendChild(menu);

				//create body
				var body=document.createElement("div");
				body.id="my_body";
				body.className="my_body";
				document.body.appendChild(body);

					//quick config
				var Qconfig=document.createElement("div");
				Qconfig.id="Q_config";
				Qconfig.innerHTML="Quick Config";
				Qconfig.onclick=function(){
					show_Qconfig();
				}
				menu.appendChild(Qconfig);

					
					//wifi config
				var Wcogfig=document.createElement("div");
				Wcogfig.id="W_config";
				Wcogfig.innerHTML="Wifi Config";
				Wcogfig.onclick=function()
					{
						toggle("wifi_5g");
						toggle("wifi_24g");
						document.getElementById("wifi5g_box").style.display = "none";		
						document.getElementById("wifi2g_box").style.display="none";				

					};
				menu.appendChild(Wcogfig);

						//sub_wifi config
							//wifi 5g
				var wifi5g=document.createElement("div");
				wifi5g.id="wifi_5g";
				wifi5g.style.display="none";
				wifi5g.innerHTML="5GHZ wifi base config";
				wifi5g.onclick=function()
					{
						toggle("wifi5g_box");
					}
				menu.appendChild(wifi5g);
					//sub wifi 5g
				var wifi5gbox=document.createElement("div");
				wifi5gbox.id="wifi5g_box";
				wifi5gbox.style.display="none";
				menu.appendChild(wifi5gbox);

				var wifi5g1=document.createElement("div");
				wifi5g1.id="wifi5g_1";
				wifi5g1.innerHTML="wifi base config";
				wifi5g1.onclick=function(){
					show_wifi5g1();
				}
				wifi5gbox.appendChild(wifi5g1);

				var wifi5g2=document.createElement("div");
				wifi5g2.id="wifi5g_2";
				wifi5g2.innerHTML="wifi base config";
				wifi5g2.onclick=function() {
					show_wifi5g2();
					
				}
				wifi5gbox.appendChild(wifi5g2);

				var wifi5g3=document.createElement("div");
				wifi5g3.id="wifi5g_1";
				wifi5g3.innerHTML="wifi base config";
				wifi5gbox.appendChild(wifi5g3);

					//wifi 2.4g
				var wifi24g=document.createElement("div");
				wifi24g.id="wifi_24g";
				wifi24g.innerHTML="2.4GHZ wifibaseconfig";
				wifi24g.style.display="none";
				wifi24g.onclick=function()
					{
						toggle("wifi2g_box");
					}
				menu.appendChild(wifi24g);

						//sub wifi 2.4g
				var wifi2gbox=document.createElement("div");
				wifi2gbox.id="wifi2g_box";
				wifi2gbox.style.display="none";
				menu.appendChild(wifi2gbox);

				var wifi2g1=document.createElement("div");
				wifi2g1.id="wifi2g_1";
				wifi2g1.innerHTML="wifi base config";
				wifi2gbox.appendChild(wifi2g1);

				var wifi2g2=document.createElement("div");
				wifi2g2.id="wifi2g_2";
				wifi2g2.innerHTML="wifi base config";
				wifi2gbox.appendChild(wifi2g2);

				var wifi2g3=document.createElement("div");
				wifi2g3.id="wifi2g_1";
				wifi2g3.innerHTML="wifi base config";
				wifi2gbox.appendChild(wifi2g3);

				//Network Parament
				var Npara=document.createElement("div");
				Npara.id="N_para";
				Npara.innerHTML="Network Parament";
				Npara.onclick=function()
					{
						toggle("N_box");
					}
				menu.appendChild(Npara);
					//sub net work parament box
				 var Nparabox=document.createElement("div");
				 Nparabox.id="N_box";
				 Nparabox.style.display="none";
				 menu.appendChild(Nparabox);
				 		//sub box
				 var inconfig=document.createElement("div");
				 inconfig.id="in_con";
				 inconfig.innerHTML="Inner Config";
				 Nparabox.appendChild(inconfig);

				 var Outconfig=document.createElement("div");
				 Outconfig.id="out_con";
				 Outconfig.innerHTML="Out Config";
				 Nparabox.appendChild(Outconfig);

				


				//Qos config
				var Qos=document.createElement("div");
				Qos.id="Q_os";
				Qos.innerHTML="QoS Config";
				menu.appendChild(Qos);

				//system tools
				var Stools=document.createElement("div");
				Stools.id="S_tools";
				Stools.innerHTML="System Tools";
				Stools.onclick=function()
					{
						toggle("tool_box");
					}
				menu.appendChild(Stools);

					//sub_system tools
					//sub system tools box
				var Stoolsbox=document.createElement("div");
				 Stoolsbox.id="tool_box";
				 Stoolsbox.style.display="none";
				 menu.appendChild(Stoolsbox);
				 		//sub box
				 var run=document.createElement("div");
				 run.id="run";
				 run.innerHTML="running status";
				 Stoolsbox.appendChild(run);

				 var traffic=document.createElement("div");
				 traffic.id="traffic";
				 traffic.innerHTML="traffic logs";
				 Stoolsbox.appendChild(traffic);

				 var update=document.createElement("div");
				 update.id="update";
				 update.innerHTML="software update";
				 Stoolsbox.appendChild(update);

				 var paras=document.createElement("div");
				 paras.id="paras";
				 paras.innerHTML="save/import paras";
				 Stoolsbox.appendChild(paras);

				 var admin=document.createElement("div");
				 admin.id="admin";
				 admin.innerHTML="modify account/psw";
				 Stoolsbox.appendChild(admin);

				 var restart=document.createElement("div");
				 restart.id="restart";
				 restart.innerHTML="restart";
				 Stoolsbox.appendChild(restart);



				}

				function show_Qconfig(){
					var contentQ=GetID("my_body");
					contentQ.innerHTML="";
					var titleQ=document.createElement("div");
					titleQ.innerHTML="Baymax's daily life";
					titleQ.className="titleQ";
					contentQ.appendChild(titleQ);
					var imgQ=document.createElement("img");
					imgQ.className="imgQ";
					imgQ.src="./1.jpg";
					imgQ.alt="Baymax";
					contentQ.appendChild(imgQ);


				}

				function show_wifi5g1(){
					var contentW1=GetID("my_body");
					contentW1.innerHTML="";
					var titleW1=document.createElement("div");
					titleW1.className="titleW1";
					titleW1.innerHTML="Baymax's happy life";
					contentW1.appendChild(titleW1);
					var imgW1=document.createElement("img");
					imgW1.className="imgW1";
					imgW1.src="./2.jpg";
					imgW1.alt="Baymax";
					contentW1.appendChild(imgW1);
				}

				function show_wifi5g2(){
					var contentW2=GetID("my_body");
					contentW2.innerHTML="";
					var titleW2=document.createElement("div");
					titleW2.className="titleW2";
					titleW2.innerHTML="Baymax's happy life";
					contentW2.appendChild(titleW2);
					var imgW2=document.createElement("img");
					imgW2.className="imgW2";
					imgW2.src="./3.jpg";
					imgW2.alt="Baymax";
					contentW2.appendChild(imgW2);
				}
			
