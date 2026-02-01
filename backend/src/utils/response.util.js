// Response helper functions
exports.sendSuccess = (res, statusCode, message, data = null) => {
  const response = {
    success: true,
    message
  };

  if (data) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};

exports.sendError = (res, statusCode, message, errors = null) => {
  const response = {
    success: false,
    message
  };

  if (errors) {
    response.errors = errors;
  }

  return res.status(statusCode).json(response);
};

// Pagination helper
exports.getPagination = (page, limit, total) => {
  return {
    currentPage: parseInt(page),
    totalPages: Math.ceil(total / limit),
    totalItems: total,
    itemsPerPage: parseInt(limit),
    hasNextPage: page * limit < total,
    hasPrevPage: page > 1
  };
};
