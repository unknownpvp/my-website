<script type="text/javascript">
      function clock() {
      var d = new Date();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      
      if (hours <= 9) hours = "0" + hours;
      if (minutes <= 9) minutes = "0" + minutes;
      if (seconds <= 9) seconds = "0" + seconds;
      
      date_time = hours + ":" + minutes + ":" + seconds;
      if (document.layers) {
       document.layers.doc_time.document.write(date_time);
       document.layers.doc_time.document.close();
      }
      else document.getElementById("doc_time").innerHTML = date_time;
       setTimeout("clock()", 1000);
      }
   </script>
   <script type="text/javascript">
      clock();
   </script>
   <script type="text/javascript">
      document.getElementById("para1").innerHTML = formatAMPM();

      function formatAMPM() {
      var d = new Date(),
          minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
          hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
          ampm = d.getHours() >= 12 ? 'pm' : 'am',
          months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'],
          days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear();
      }
   </script>