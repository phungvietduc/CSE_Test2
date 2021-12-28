const btnRegister = document.getElementById('btnGoiDuLieu');

btnRegister.addEventListener('click', function () {
    let isValid = checkValidate();

    if (isValid) {
        alert('Gửi đăng ký thành công');
    }
    else {
        alert('Đăng ký không thành công');
    }
});

// ===========================================================
function validateForm() {
    var hoten = document.getElementById("txtHoTen").value;
    var diachi = document.getElementById("txtDiaChi").value;
    var sdt = document.getElementById("txtSDT").value;
    var phuongtien = document.getElementById("rdPhuongTien_1").value;
    var nglon = document.getElementById("nguoiLon").value;
    var treem = document.getElementById("treEm").value;
   
 
    if (fname == null || fname == "") {
        alert("First name must be filled out");
        return false;
    } else if (sname == null || sname == "") {
        alert("Last name must be filled out");
        return false;
    } else if (isNaN(validate) || validate != 6) {
        alert("You're either a spammer or can't add");
      return false;
    }
  alert('ok, redirect to https://nguyenvanhieu.vn');
  window.location.href = "https://nguyenvanhieu.vn";
}