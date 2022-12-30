main();

function main() {
  DP = "SQLOLEDB";
  DS = "devreshop.database.windows.net,1433";
  DB = "unicostagelogging";
  US = "UnicoAdm";
  PW = "Linx@r3sh0p#!";
  
  adOpenForwardOnly = 0;
  adLockReadOnly = 1;
  adCmdText = 1;
  try {
    var objRs = new ActiveXObject("ADODB.Recordset");
  } catch (e) {
    alert("ADODB namespace not found.");
    exit(0);
  }

  strConn =  "Provider="        +DP+
            ";Initial Catalog=" +DB+
            ";Data Source="     +DS+
            ";User ID="         +US+
            ";Password="        +PW+ ";"
            //";Trusted_Connection=false"         +
            //";MultipleActiveResultSets=true"    +
            //";Encrypt=true"                     +
            //";TrustServerCertificate=false;"
            //";Integrated Security=SSPI;"
  //strComm = "SELECT DateTime, TransactionNumber, Url, RequestContent, ResponseContent, TenantId, UserId, ClientId, TerminalCode" +
  //          "FROM LogInfo "
  strQuery = "SELECT TOP 10 * " +
            "FROM LogInfo(NOLOCK) "

  objRs.open(strQuery,   
             strConn,   
             adOpenForwardOnly,  
             adLockReadOnly,  
             adCmdText);

  objRs.MoveFirst();
  while (objRs.EOF != true) {
    alert(objRs("DateTime")+"\t"  
         +objRs("TransactionNumber")+"\t"  
         +objRs("Url"));
    objRs.MoveNext();
  }
  
  objRs.Close  
  objRs = null;
}

function alert(str) {
  WScript.Echo(str);
}