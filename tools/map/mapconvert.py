#!/usr/bin/python
# Exports a Panzer General 2 scenario (SCN) to xml
# Copyright (c) 2021 Andrii Voloshyn.
# Licensed under the GPL 2 license:
# http://www.gnu.org/licenses/old-licenses/gpl-2.0.html

import os, sys, fnmatch
import pprint
from struct import *
from lxml import etree as x