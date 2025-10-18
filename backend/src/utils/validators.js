exports.validateFullname = (fullname) => {
  if (!fullname || fullname.trim() === "")
    return "Họ tên là bắt buộc.";
  if (!/^[A-Za-zÀ-ỹ\s]+$/.test(fullname))
    return "Họ tên chỉ được chứa ký tự chữ và dấu cách.";
  return null;
};

exports.validateEmail = (email) => {
  if (!email || email.trim() === "")
    return "Email là bắt buộc.";
  if (!/^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email))
    return "Email không hợp lệ.";
  return null;
};
