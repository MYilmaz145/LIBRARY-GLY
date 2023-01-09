
        function secim(x)
        {
            document.getElementById("hiddeninput").value=x;
        }
        function change()
        {
            let num=document.getElementById("hiddeninput").value;
            if(num=="")
            {
                alert("editlenecek resmi secmediniz")
            }
            if(num=="1")
            {
                document.getElementById("c1").innerText=document.getElementById("comment").value;
                document.getElementById("p1").innerText=document.getElementById("area").value;
            }
            if(num=="2")
            {
                document.getElementById("c2").innerText=document.getElementById("comment").value;
                document.getElementById("p2").innerText=document.getElementById("area").value;
            }
            if(num=="3")
            {
                document.getElementById("c3").innerText=document.getElementById("comment").value;
                document.getElementById("p3").innerText=document.getElementById("area").value;
            }
            if(num=="4")
            {
                document.getElementById("c4").innerText=document.getElementById("comment").value;
                document.getElementById("p4").innerText=document.getElementById("area").value;
            }
            if(num=="5")
            {
                document.getElementById("c5").innerText=document.getElementById("comment").value;
                document.getElementById("p5").innerText=document.getElementById("area").value;
            }
            if(num=="6")
            {
                document.getElementById("c6").innerText=document.getElementById("comment").value;
                document.getElementById("p6").innerText=document.getElementById("area").value;
            }
        }


    