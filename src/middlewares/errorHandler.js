const { error } = require("../utils/response");

module.exports = (err, req, res, next) => {
  console.error("❌ Error:", err);
  error(res, "SERVER_ERROR", "Lỗi server", 500);
};
