function divChange(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   b1 = document.getElementById("footimp");
   b2 = document.getElementById("foothp");
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
      b2.style.display = "none";
      b1.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
      b2.style.display = "block";
      b1.style.display = "none";
   }
}
