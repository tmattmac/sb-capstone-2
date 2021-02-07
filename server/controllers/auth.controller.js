module.exports = {

  /**
   * POST /api/auth/login
   */
  login: async (req, res, next) => {
    res.send({ message: 'success' });
  },

  /**
   * POST /api/auth/register
   */
  register: async (req, res, next) => {
    res.status(201).send({ message: 'success' });
  },
}
