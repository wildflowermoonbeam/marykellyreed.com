function SelectRedirect() {
    switch (document.getElementById("navigation").value) {
      case "bio":
      window.location = "mary.html";
      break;
  
      case "heartshaped":
      window.location = "heartshaped.html";
      break;
  
      case "whisperland":
      window.location = "whisperland.html";
      break;
  
      case "kite":
      window.location = "kite.html";
      break;
  
      case "intuit":
      window.location = "intuit.html";
      break;
  
      case "mkrootd":
      window.location = "mkrootd.html";
      break;
  
      case "cozy":
      window.location = "cozy.html";
      break;
  
      case "bernadette":
      window.location = "bernadette.html";
      break;
  
      case "about":
        window.location = "about.html";
        break;
  
        case "instagram":
        window.location = "https://www.instagram.com/marykellyreed/";
        break;
        
        case "linkedin":
        window.location = "https://www.linkedin.com/in/marykellyreed/";
        break;
  
        case "email":
        window.location = "mailto:marykellyreed@gmail.com";
        break;
  
      default:
        window.location = "../";
        break;
    }
  }