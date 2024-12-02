// kiểm tra tính hợp lệ của mật khẩu
function kt_mk(mk) {
  // điều kiện độ dài của mật khẩu
  if (mk.length < 6) {
    return false;
  }
  let in_t = false;
  let in_h = false;
  let so = false;
  // kiểm tra các thành phần mật khẩu
  for (let i = 0; i < mk.length; i++) {
    let char = mk[i];
    if ("a" <= char && char <= "z") {
      in_t = true;
    }
    if ("A" <= char && char <= "Z") {
      in_h = true;
    }
    if ("0" <= char && char <= "9") {
      so = true;
    }
  }
  return in_t && in_h && so;
}

function set_mk() {
  let mk = prompt("nhập thiết lập mật khẩu: ");
  if (kt_mk(mk)) {
    alert("chấp nhận mật khẩu: " + mk);
    return mk;
  } else {
    alert(`mật khẩu chưa đạt yêu cầu!
            mật khẩu phải bao gồm:
            1. chiều dài tối thiểu 6 ký tự. 
            2. chứa ký tự thường.
            3. chứa ký tự in hoa.
            4. chứa ký tự số.`);
    set_mk();
  }
}
let mk_ok = set_mk();
// chuong trinh dang nhap
for (let i = 5; i > 0; i--) {
  let dang_nhap = prompt("mời nhập mật khẩu đăng nhập: ");
  if (dang_nhap === mk_ok) {
    alert("Mật khẩu chính xác.");
    break;
  } else {
    if (i > 1) {
      alert(`bạn đã nhập sai mật khẩu bạn còn ${i - 1} lần nhập.`);
    } else {
      alert(`bạn đã nhập sai mật khẩu 5 lần. Tài khoản của bạn bị khóa!
Yêu cầu liên hệ addmin để được hổ trợ. `);
    }
  }
}
