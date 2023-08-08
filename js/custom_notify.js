const notify = {
    success: (msg) =>{
        new Notify({
            status: 'success',
            title: msg,
            effect: 'slide',
            speed: 500,
            customClass: null,
            customIcon: null,
            showIcon: true,
            showCloseButton: true,
            autoclose: false,
            autotimeout: 3000,
            gap: 25,
            distance: 75,
            type: 1,
            position: 'right top',
            autoclose: true,
            autotimeout: 5000,
        });
    },
    error: (msg) =>{
        new Notify({
            status: 'error',
            title: msg,
            effect: 'slide',
            speed: 500,
            customClass: null,
            customIcon: null,
            showIcon: true,
            showCloseButton: true,
            autoclose: false,
            autotimeout: 3000,
            gap: 25,
            distance: 75,
            type: 1,
            position: 'right top',
            autoclose: true,
            autotimeout: 5000,
        });
    },
    warning: (msg) =>{
        new Notify({
            status: 'warning',
            title: msg,
            effect: 'slide',
            speed: 500,
            customClass: null,
            customIcon: null,
            showIcon: true,
            showCloseButton: true,
            autoclose: false,
            autotimeout: 3000,
            gap: 25,
            distance: 75,
            type: 1,
            position: 'right top',
            autoclose: true,
            autotimeout: 5000,
        });
    }
}

