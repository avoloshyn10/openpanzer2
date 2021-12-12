#!/usr/bin/python
# Exports a Panzer General 2 scenario (SCN) to xml
# Copyright (c) 2021 Andrii Voloshyn.
# Licensed under the GPL 2 license:
# http://www.gnu.org/licenses/old-licenses/gpl-2.0.html

import os, sys, fnmatch
import pprint
from struct import *
from lxml import etree as x
from datetime import date
# spaghetti !
#file specs http://luis-guzman.com/links/PG2_FilesSpec.html#(MAP) file
MAP_IMAGE_URL="resources/maps/images/"
scnlist = []
maplist = []

for scn in sys.argv[1:]:
  print("Processing %s"%scn)
  # the corresponding scenarion txt name