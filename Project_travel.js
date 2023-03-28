window.alert("Heartly, Welcome to India's Travel Page")

function timerphoto() 
{
    var imagarr =["treeSunset.jpg",",dnkldsjn-min.jpg","dubai.jpg","beach-min.jpg","desert.jpg","Foresttrees.jpg","hill.jpg","ice houses.jpg","island.jpg","lighthouse.jpg","mountains.jpg","River.jpg","riversunset.jpg","rootsPlants.jpg","sunset.jpg","sunset1.jpg","train.jpg","waterfalls.jpg"]
    var numberimage =0;
    var indexleng =imagarr.length
    var randonnummber =Math.random()*indexleng;
    var number = Math.floor(randonnummber)
    document.getElementById("topContainer").style.backgroundImage="url(./"+imagarr[number]+")"  
    var refreshpage =setTimeout(function(){timerphoto()},5000)
}
var imagesState = document.getElementsByClassName("box")
for(i=1;i<=imagesState.length;i++)
{
    imagesState[i-1].setAttribute("src","./"+i+"-min.jpg")
    imagesState[i-1].style.width="350px"
    imagesState[i-1].style.height="400px"
}
//images side move 
var indval =0;
var imagArray=["histroical.jpg","Beaches.jpg","Adventures-min.jpg","mountains1.jpg",]
var imagArray1=["indianCulturals.jpg","Hiking.jpg","Temples.jpg","RiversAndLakes.jpg"]
var imagArray2=["Hillstations.jpg","climbing.jpg","tajmahal.jpg","Lighthouse1.jpg"]
var textArray=["<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Historical</p><br><p id='intro'>The Red Fort is located in Delhi, opposite the Chandni Chowk market. It was built by the famous Mughal emperor Shah Jahan in 1648. It is one of the historical structures of Delhi, which is mainly known for its architecture. Due to the use of red sandstone and marble, it is known as Red Fort.</p>"
                ,"<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Beaches</p><br><p id='intro'>Bordered by emerald greenery and sparkling blue waters, the virgin beach of Rushikonda is a soothing sight to your sore eyes and tired souls. It will take you a short drive from the city center to reach this paradise on earth, which is located about 16 km away from Vizag. Caressed by the soft golden sands, Rushikonda stands top in the list of the most fascinating beaches in Vishakhapatnam. It is also one of the few beaches in Andhra Pradesh that is maintained by APTDC, the state’s tourism development corporation.</p>"
                ,"<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Adenture Places</p><br><p id='intro'>An adventure is an exciting experience or undertaking that is typically bold, sometimes risky.[1] Adventures may be activities with danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting, or other extreme sports. Adventures are often undertaken to create psychological arousal or in order to achieve a greater goal, such as the pursuit of knowledge that can only be obtained by such activities.</p>"
                ,"<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Mountains</p><br><p id='intro'>A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. Although definitions vary, a mountain may differ from a plateau in having a limited summit area, and is usually higher than a hill, typically rising at least 300 metres (1,000 feet) above the surrounding land. A few mountains are isolated summits, but most occur in mountain ranges.</p>"]
var textArray1=["<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Indian Cultures</p><br><p id='intro'>Indian culture is the heritage of social norms and technologies that originated in or are associated with the ethno-linguistically diverse India. The term also applies beyond India to countries and cultures whose histories are strongly connected to India by immigration, colonisation, or influence, particularly in South Asia and Southeast Asia. India's languages, religions, dance, music, architecture, food and customs differ from place to place within the country.</p>"
                ,"<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Hiking</p><br><p id='intro'>Forestry in India is a significant rural industry and a major environmental resource. India is one of the ten most forest-rich countries of the world. Together, India and 9 other countries account for 67 percent of total forest area of the world.[1] India's forest cover grew at 0.20% annually over 1990–2000,[2] and has grown at the rate of 0.7% per year over 2000–2010,[2] after decades where forest degradation was a matter of serious concern.</p>"
                ,"<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Temples</p><br><p id='intro'>A temple (from the Latin templum) is a building reserved for spiritual rituals and activities such as prayer and sacrifice. Religions which erect temples include Christianity (whose temples are typically called churches), Hinduism, Buddhism, Sikhism (whose temples are called gurudwara), Jainism (whose temples are sometimes called derasar), Islam (whose temples are called mosques), Judaism (whose temples are called synagogues), Zoroastrianism (whose temples are sometimes called Agiary).</p>"
                ,"<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Rivers and Lakes</p><br><p id='intro'>A lake is a naturally occurring, relatively large body of water localized in a basin completely surrounded by dry land,[1] with much slower-moving flow than any inflow or outflow streams that serve to feed or drain it.[2] Lakes lie completely on land and are separate from the ocean, although, like the much larger oceans, they form part of the Earth's water cycle by serving as large standing pools of storage water. Most lakes are freshwater, but some are salt lakes with salinities even higher than that of seawater.</p>"]
var textArray2=["<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Hill Stations</p><br><p id='intro'>are high-altitude towns for recreation, enjoyment and used as a place of refuge to escape the blistering heat in India during summertime. As India is a vast country with limited amounts of the coastal area most of its towns and districts face continental type of climate with summer being very hot so hill stations becomes an excellent spot to escape such hot and humid conditions as well as a place of enjoyment to spent quality time with your family and partner during summer break.</p>"
                ,"<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Campling and Climbing</p><br><p id='intro'>A lake is a naturally occurring, relatively large body of water localized in a basin completely surrounded by dry land,[1] with much slower-moving flow than any inflow or outflow streams that serve to feed or drain it.[2] Lakes lie completely on land and are separate from the ocean, although, like the much larger oceans, they form part of the Earth's water cycle by serving as large standing pools of storage water. Most lakes are freshwater, but some are salt lakes with salinities even higher than that of seawater.</p>"
                ,"<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Beautiful with Peace</p><br><p id='intro'>The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.</p>"
                ,"<p><br>&nbsp;&nbsp;&nbsp;&nbsp; #Light House</p><br><p id='intro'>A lighthouse is a tower, building, or other type of physical structure designed to emit light from a system of lamps and lenses and to serve as a beacon for navigational aid, for maritime pilots at sea or on inland waterways.</p>"]
function increase() 
{
    indval++;
    if (indval>=imagArray.length) 
    {
        indval=0;
        document.getElementById("SideBox1").style.backgroundImage="url(./"+imagArray[indval]+")" 
        document.getElementById("SideBox2").style.backgroundImage="url(./"+imagArray1[indval]+")" 
        document.getElementById("SideBox3").style.backgroundImage="url(./"+imagArray2[indval]+")" 
        document.getElementById("detailsSide1").innerHTML=textArray[indval] 
        document.getElementById("detailsSide2").innerHTML=textArray1[indval]  
        document.getElementById("detailsSide3").innerHTML=textArray2[indval] 
    } 
    else 
    {
        document.getElementById("SideBox1").style.backgroundImage="url(./"+imagArray[indval]+")"
        document.getElementById("SideBox2").style.backgroundImage="url(./"+imagArray1[indval]+")" 
        document.getElementById("SideBox3").style.backgroundImage="url(./"+imagArray2[indval]+")" 
        document.getElementById("detailsSide1").innerHTML=textArray[indval]  
        document.getElementById("detailsSide2").innerHTML=textArray1[indval]   
        document.getElementById("detailsSide3").innerHTML=textArray2[indval] 
    }  
}
function decrease() 
{
    indval--;
    if (indval<0) 
    {
        indval=3;
        document.getElementById("SideBox1").style.backgroundImage="url(./"+imagArray[indval]+")" 
        document.getElementById("SideBox2").style.backgroundImage="url(./"+imagArray1[indval]+")"    
        document.getElementById("SideBox3").style.backgroundImage="url(./"+imagArray2[indval]+")" 
        document.getElementById("detailsSide1").innerHTML=textArray[indval] 
        document.getElementById("detailsSide2").innerHTML=textArray1[indval] 
        document.getElementById("detailsSide3").innerHTML=textArray2[indval] 
    } 
    else 
    {
        document.getElementById("SideBox1").style.backgroundImage="url(./"+imagArray[indval]+")" 
        document.getElementById("SideBox2").style.backgroundImage="url(./"+imagArray1[indval]+")" 
        document.getElementById("SideBox3").style.backgroundImage="url(./"+imagArray2[indval]+")" 
        document.getElementById("detailsSide1").innerHTML=textArray[indval] 
        document.getElementById("detailsSide2").innerHTML=textArray1[indval]    
        document.getElementById("detailsSide3").innerHTML=textArray2[indval] 
    }    
}
//Subcribe java script

function colorchange() 
{
    var colorarr =["red","blue","orange","green","pink","royalblue","white","darkred","purple","teal","orangered","gray","brown","navy","hotpink","whitesmoke"]
    var numbercolor =0;
    var indexleng =colorarr.length
    var randonnummber =Math.random()*indexleng;
    var number = Math.floor(randonnummber)
    document.getElementById("trusted").style.color=colorarr[number]
    var refreshpage =setTimeout(function(){colorchange()},5000)
}























