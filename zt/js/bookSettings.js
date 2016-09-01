flippingBook.pages = [
	"pages/page-001.jpg",
	"pages/page-002.jpg",
	"pages/page-003.jpg",
	"pages/page-004.jpg",
	"pages/page-005.jpg",
	"pages/page-006.jpg",
	"pages/page-007.jpg",
	"pages/page-008.jpg",
	"pages/page-009.jpg",
	"pages/page-010.jpg",
	"pages/page-011.jpg",
	"pages/page-012.jpg"
];


flippingBook.contents = [
	[ "Cover", 1 ],
	[ "Modern", 4 ]
];

// define custom book settings here
flippingBook.settings.bookWidth = 1000;
flippingBook.settings.bookHeight = 800;
flippingBook.settings.pageBackgroundColor = 0x5b7414;
flippingBook.settings.backgroundColor = 0x83a51c;
flippingBook.settings.zoomUIColor = 0x919d6c;
flippingBook.settings.useCustomCursors = false;
flippingBook.settings.dropShadowEnabled = false,
flippingBook.settings.zoomImageWidth = 1264;
flippingBook.settings.zoomImageHeight = 900;
flippingBook.settings.downloadURL = "http://www.page-flip.com/new-demos/03-kitchen-gorenje-2008/kitchen_gorenje_2008.pdf";
flippingBook.settings.flipSound = "";
flippingBook.settings.flipCornerStyle = "first page only";
flippingBook.settings.zoomHintEnabled = false;

// default settings can be found in the flippingbook.js file
flippingBook.create();
