angular
    .module('eyetem')
    .controller('ScannerController', function ($scope, supersonic) {
        $scope.uploadReceipt = function () {
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
            });
            function onSuccess(imageData) {
                var image = document.getElementById('receipt-image');
                image.src = "data:image/jpeg;base64," + imageData;
            }
            function onFail(message) { }
        };
    });
