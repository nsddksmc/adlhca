function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aEasKpNloQ":
        Script1();
        break;
      case "5nwOq7tWg82":
        Script2();
        break;
      case "5YTHUwRFlQ8":
        Script3();
        break;
      case "6QV3sGr0uI0":
        Script4();
        break;
      case "6AH9imiGqNS":
        Script5();
        break;
      case "6StMlGhU6AH":
        Script6();
        break;
      case "64OPKPTGrbu":
        Script7();
        break;
      case "6ddsNEMZb9T":
        Script8();
        break;
      case "5VDgF9gwyYO":
        Script9();
        break;
      case "5z77gmWzuVs":
        Script10();
        break;
      case "6gqSAPnsGRE":
        Script11();
        break;
      case "5v4KeluaN41":
        Script12();
        break;
      case "6A6z2j1KT8h":
        Script13();
        break;
      case "6i4nUj4hj6e":
        Script14();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script13()
{
  $("#tab-customlink").show();
}

function Script14()
{
  window.print();
}

