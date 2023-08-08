// *********** config ***********
const config = {
    api: {
        host: "http://45.141.27.54:808",
    },
}
// *********** config ***********


// Update button
const update_button = document.getElementById("update_btn");

// WashingMachine Card Element
const status_machine_1 = document.getElementById("status_machine_1");
const status_machine_2 = document.getElementById("status_machine_2");
const status_machine_3 = document.getElementById("status_machine_3");
const status_machine_4 = document.getElementById("status_machine_4");
const status_machine_5 = document.getElementById("status_machine_5");
const status_machine_6 = document.getElementById("status_machine_6");


// First load update
(async() =>{
    await UpdateAll();
    notify.success("อัปเดตสถานะเครื่องเเล้ว");
})();

// click update button
update_button.addEventListener("click", async() =>{
    await UpdateAll();
    notify.success("อัปเดตสถานะเครื่องเเล้ว");
});

// update every 1.5 Minute
setInterval(async() =>{
    await UpdateAll();
    notify.success("อัปเดตสถานะเครื่องเเล้ว");
}, 90 * 1000); // = 9000ms







/**
 * status 0 = not use
 * status 1 = in use
 * status -1 = Cant get data / error 
 */
function status_theme(status){
    if(status === 0){
        return "<span class='text-success'>สามารถใช้งานได้</span>";
    }
    else if(status === 1){
        return "<span class='text-warning'>กำลังทำงานอยู่</span>";
    }
    else if(status === (-1)){
        return "<span class='text-danger'>เกิดข้อผิดพลาด</span>";
    }
}

async function UpdateAll(){
    await UpdateMachine1();
    await UpdateMachine2();
    await UpdateMachine3();
    await UpdateMachine4();
    await UpdateMachine5();
    await UpdateMachine6();
}

async function UpdateMachine1(){
    try {
        const response = await axios.get(config.api.host + "/api/status/check/1");
        if(response.data.status == "FAIL"){
            console.log(response.data.error);
            status_machine_1.innerHTML = status_theme(-1);
            return;
        }
        if(response.data.status == "SUCCESS"){
            if(response.data.data.results.status === 1){
                status_machine_1.innerHTML = status_theme(1);
            }
            else {
                status_machine_1.innerHTML = status_theme(0);
            }
        }
    }
    catch(err){
        console.log(err);
        status_machine_1.innerHTML = status_theme(-1);
        return;
    }
}

async function UpdateMachine2(){
    try {
        const response = await axios.get(config.api.host + "/api/status/check/2");
        if(response.data.status == "FAIL"){
            console.log(response.data.error);
            status_machine_2.innerHTML = status_theme(-1);
            return;
        }
        if(response.data.status == "SUCCESS"){
            if(response.data.data.results.status === 1){
                status_machine_2.innerHTML = status_theme(1);
            }
            else {
                status_machine_2.innerHTML = status_theme(0);
            }
        }
    }
    catch(err){
        console.log(err);
        status_machine_2.innerHTML = status_theme(-1);
        return;
    }
}

async function UpdateMachine3(){
    try {
        const response = await axios.get(config.api.host + "/api/status/check/3");
        if(response.data.status == "FAIL"){
            console.log(response.data.error);
            status_machine_3.innerHTML = status_theme(-1);
            return;
        }
        if(response.data.status == "SUCCESS"){
            if(response.data.data.results.status === 1){
                status_machine_3.innerHTML = status_theme(1);
            }
            else {
                status_machine_3.innerHTML = status_theme(0);
            }
        }
    }
    catch(err){
        console.log(err);
        status_machine_3.innerHTML = status_theme(-1);
        return;
    }
}

async function UpdateMachine4(){
    try {
        const response = await axios.get(config.api.host + "/api/status/check/4");
        if(response.data.status == "FAIL"){
            console.log(response.data.error);
            status_machine_4.innerHTML = status_theme(-1);
            return;
        }
        if(response.data.status == "SUCCESS"){
            if(response.data.data.results.status === 1){
                status_machine_4.innerHTML = status_theme(1);
            }
            else {
                status_machine_4.innerHTML = status_theme(0);
            }
        }
    }
    catch(err){
        console.log(err);
        status_machine_4.innerHTML = status_theme(-1);
        return;
    }
}

async function UpdateMachine5(){
    try {
        const response = await axios.get(config.api.host + "/api/status/check/5");
        if(response.data.status == "FAIL"){
            console.log(response.data.error);
            status_machine_5.innerHTML = status_theme(-1);
            return;
        }
        if(response.data.status == "SUCCESS"){
            if(response.data.data.results.status === 1){
                status_machine_5.innerHTML = status_theme(1);
            }
            else {
                status_machine_5.innerHTML = status_theme(0);
            }
        }
    }
    catch(err){
        console.log(err);
        status_machine_5.innerHTML = status_theme(-1);
        return;
    }
}

async function UpdateMachine6(){
    try {
        const response = await axios.get(config.api.host + "/api/status/check/6");
        if(response.data.status == "FAIL"){
            console.log(response.data.error);
            status_machine_6.innerHTML = status_theme(-1);
            return;
        }
        if(response.data.status == "SUCCESS"){
            if(response.data.data.results.status === 1){
                status_machine_6.innerHTML = status_theme(1);
            }
            else {
                status_machine_6.innerHTML = status_theme(0);
            }
        }
    }
    catch(err){
        console.log(err);
        status_machine_6.innerHTML = status_theme(-1);
        return;
    }
}
