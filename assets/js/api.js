function anPropReq () {
	var xhr, url, data, outgoingMessage;

	url = "https://northamerica-northeast1-vivid-alchemy-109421.cloudfunctions.net/apr";
	
	data = App_Global_Selected_Feature;
    	data.api = {};
	data.api.flag = "apr";
	
	outgoingMessage = JSON.stringify(data);
	
	xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.send(outgoingMessage);
};

document.getElementById("request-additional-details-link").onclick = 'anPropReq()';
