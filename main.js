// JavaScript Document

document.getElementById('showSignup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

function clearForm(formId) {
    var form = document.getElementById(formId);
    var inputs = form.querySelectorAll('input, textarea, select');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type != "button" && inputs[i].type != "submit" && inputs[i].type != "reset") {
            inputs[i].value = '';
        }
    }
}

/*

<script>
  const str = "Abebaw";
  const a = str.charAt(0);
  const b = str.charCodeAt(0);

  document.write("<br>a is ", a);
  document.write("<br> b is ", b);
  document.write("<br>");
  const array = [10, 20, 30]
  document.write(array);

  array.push(40);
  document.write("<br>" + array);

  array.shift();
  document.write("<br>" + array);

  array.unshift(100);
  document.write("<br>" + array);

  const strArray = ["Solomon", "David"];
  const joining = strArray.join(" ");
  document.write("<br>" + joining);

  const day = new Date(2023, 5, 23, 9, 1, 0, 0);
  document.write("<br>" + day + "<br>");
    
  document.write(Math.SQRT4 + "<br>");

</script>
*/