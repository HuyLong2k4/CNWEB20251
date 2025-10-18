const commentService = require("../services/commentService");

class commentController {
    static async createComment(req, res) {
        try {
            const { fullname, email, comment } = req.body;
            const result = commentService.validateComment({ fullname, email, comment });

            if (!result.valid) {
                return res.status(400).json({ errors: result.errors });
            }

            return res.json({ message: "Bình luận của bạn đã được ghi nhận!" });
        } catch (error) {
            console.error("Lỗi tại handleComment:", error);
            return res.status(500).json({ message: "Đã có lỗi xảy ra ở máy chủ." });
        }
    }
}

module.exports = commentController;
