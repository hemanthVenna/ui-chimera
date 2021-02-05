var express = require('express');
var router = express.Router();

var getDevicesCtrl = require("../Controller/getDevices")

router.route("/get-devices").get(getDevicesCtrl.getDevices);
router.route("/add-device").post(getDevicesCtrl.postDevice);
router.route("/delete/:id").get(getDevicesCtrl.deleteDevice)


module.exports = router