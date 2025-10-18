const { validateFullname, validateEmail } = require("../utils/validators");

class CommentService {
    /**
     * Xác thực dữ liệu bình luận.
     * @param {object} data - Dữ liệu bình luận.
     * @param {string} data.fullname - Họ tên người dùng.
     * @param {string} data.email - Email người dùng.
     * @param {string} data.comment - Nội dung bình luận (hiện không xác thực).
     * @returns {{valid: boolean, errors?: object}}
     */
    static validateComment({ fullname, email, comment }) {
        const errors = {};

        const nameErr = validateFullname(fullname);
        const emailErr = validateEmail(email);

        if (nameErr) errors.fullname = nameErr;
        if (emailErr) errors.email = emailErr;

        return {
            valid: Object.keys(errors).length === 0,
            errors,
        };
    }
}

module.exports = CommentService;