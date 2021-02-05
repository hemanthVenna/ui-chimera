var Devices =  require("../Modal/Device")

module.exports.getDevices = function(req,res){
        Devices.find({}).exec(function(err,devices){
            if(devices){
                const deviceData = { 
                    "id":3, 
                    "device":"MotoG", 
                    "os":"Android4.3", 
                    "manufacturer":"Motorola", 
                    "lastCheckedOutDate":"2016-02-21T09:10:00-05:00", 
                    "lastCheckedOutBy":"ChrisEvans", 
                    "isCheckedOut":false 
                    }
                    
                res.send(devices)
            }
        })
    
}

module.exports.postDevice = function(req,res){
    Devices.find({}).exec(function(err,devices){
        var newDevice = new Devices();
        newDevice.device = req.body.device;
        newDevice.manufacturer = req.body.manufacturer
        newDevice.os = req.body.os
        newDevice.lastCheckedOutDate = req.body.lastCheckedOutDate
        newDevice.lastCheckedOutBy = req.body.lastCheckedOutBy
        newDevice.isCheckedOut = req.body.isCheckedOut
        newDevice.save(function(err, device){
            console.log("device", device)
            if(device) {
                res.send({"success": true})
            }
        })
    })

}

module.exports.deleteDevice = function(req,res){
    console.log("add  device", req.params.id)
    Devices.findById({_id: req.params.id}).remove(function(err,device){
                res.send({"success": true})
    })

}
