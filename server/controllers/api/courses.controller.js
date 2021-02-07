module.exports = {

  /**
   * GET /api/courses
   * return list of all courses with title and description
   */
  all: async (req, res, next) => {
    res.send({ message: 'success' });
  },

  /**
   * GET /api/courses/:courseId
   * return single course details
   * default      return outline with main description plus unit titles
   * ?full=true   return full course content (if enrolled)
   */
  byId: async (req, res, next) => {
    res.send({ message: 'success' });
  },

  /**
   * POST /api/courses/:courseId/enroll
   * for now, just enroll the logged in user to the course
   * TODO: Figure out how to integrate payment processing
   */
  enrollUser: async (req, res, next) => {
    res.send({ message: 'success' });
  },
  
}
