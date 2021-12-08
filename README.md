# OpenPanzer2 - Rewrite of Open Panzer game

https://avoloshyn10.github.io/openpanzer2/

Copyright (c) 2021 Andrii Voloshyn.

The code of OpenPanzer2 is issued under the GNU General Public License (GPL), version 2.
By contributing code or content to the project, you agree for it to be distributed under GPL2 open-source license.

http://www.gnu.org/licenses/old-licenses/gpl-2.0.html

## Development notes:

OpenPanzer2 doesn't use any extra javascript libraries (like jquery, node etc).
Styling DOM elements should be done in their CSS files. Adding style for static elements in the code shouldn't exist.
All positioning of DOM elements should be done in CSS files. Bottom line: if something can be done in a css file then there it should go not in the javascript code.

### Running the code locally in Google Chrome requires --allow-file-access-from-files option when starting Google Chrome. Or use https://github.com/kzahel/web-server-chrome .
