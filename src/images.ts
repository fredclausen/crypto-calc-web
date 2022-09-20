import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faFolder } from "@fortawesome/free-solid-svg-icons/faFolder";
import { faCoins } from "@fortawesome/free-solid-svg-icons/faCoins";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

library.add(faFolder);
library.add(faCoins);
library.add(faCircleInfo);
library.add(faTrash);

dom.watch();
