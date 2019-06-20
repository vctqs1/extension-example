// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({
		color: '#FF9800'
	}, function() {
		$('body').css({'color': 'red'});
		console.log("The color is green.");
	});
	chrome.browserAction.onClicked.addListener(function() {
		chrome.tabs.create({'url': "chrome://newtab" });
	});
});