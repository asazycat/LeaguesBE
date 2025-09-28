import { Router } from "express";
import { getRoutes } from "./controller.js";
const apiRoutes = Router();
apiRoutes.get('/', getRoutes);
export default apiRoutes;
//# sourceMappingURL=routes.js.map