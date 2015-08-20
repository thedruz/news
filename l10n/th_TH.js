OC.L10N.register(
    "news",
    {
    "Feed contains invalid XML" : "ฟีดประกอบด้วย XML ที่ไม่ถูกต้อง",
    "Feed not found: either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl http://the-feed.tld" : "ไม่พบฟีด: เว็บไซต์ไม่ได้ระบุฟีดหรือบล็อกการเข้าถึง ลองพยายามดาวน์โหลดฟีดในเซิฟเวอร์ด้วยคำสั่งนี้: http://the-feed.tld",
    "Detected feed format is not supported" : "รูปแบบฟีดที่ตรวจพบไม่ได้รับการสนับสนุน",
    "SSL Certificate is invalid" : "ใบรับรองความปลอดภัย SSL ไม่ถูกต้อง",
    "Website not found" : "ไม่พบเว็บไซต์",
    "More redirects than allowed, aborting" : "มีการเปลี่ยนเส้นทางมากกว่าที่อนุญาตไว้ ยกเลิก!",
    "Bigger than maximum allowed size" : "มีขนาดใหญ่กว่าขนาดสูงสุดที่อนุญาต",
    "Request timed out" : "การร้องขอหมดเวลา",
    "Request failed, network connection unavailable!" : "คำขอล้มเหลวเชื่อมต่อเครือข่ายไม่ได้!",
    "Request unauthorized. Are you logged in?" : "คำขอไม่ได้รับอนุญาต คุณเข้าสู่ระบบ?",
    "Request forbidden. Are you an admin?" : "คำขอถูกปฏิเสธ คุณเป็นผู้ดูแลระบบ?",
    "Token expired or app not enabled! Reload the page!" : "โทเค็นหมดอายุหรือไม่เปิดใช้งานแอพพลิเคชัน! โหลดหน้าใหม่อีกครั้ง!",
    "Internal server error! Please check your " : "ข้อผิดพลาดภายในเซิร์ฟเวอร์! กรุณาตรวจสอบบันทึกของคุณ",
    "Request failed, ownCloud is in currently " : "คำขอล้มเหลว ownCloud อยู่ในขณะนี้",
    "Can not add feed: Exists already" : "ไม่สามารถเพิ่มฟีด: มีอยู่แล้ว",
    "Articles without feed" : "บทความไม่มีฟีด",
    "Can not add folder: Exists already" : "ไม่สามารถเพิ่มโฟลเดอร์: มีอยู่แล้ว",
    "Use ownCloud cron for updates" : "ใช้ Cron ownCloud สำหรับการอัพเดท",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "ปิดการใช้งานนี้ถ้าคุณเรียกใช้อัพเดทด้วยตนเองเช่นอัพเดท Python รวมอยู่ในแอพฯ",
    "Purge interval" : "ช่วงเวลาที่ล้าง",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "จำนวนขั้นต่ำของวินาทีหลังจากลบฟีดและโฟลเดอร์ที่ถูกลบออกจากฐานข้อมูลนั้น ค่าต่ำกว่า 60 วินาทีจะถูกยกเว้น",
    "Maximum read count per feed" : "นับจำนวนอ่านสูงสุดต่อฟีด",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off completely" : "กำหนดจำนวนสูงสุดของบทความที่สามารถอ่านต่อฟีดที่จะไม่ถูกลบโดยการล้างข้อมูล หากบทความเก่าเกิดขึ้นอีกครั้งหลังจากที่ถูกอ่านเพิ่มค่านี้; ค่าลบเช่น -1 จะปิดคุณลักษณะนี้อย่างสมบูรณ์",
    "Maximum redirects" : "เปลี่ยนเส้นทางสูงสุด",
    "How many redirects the feed fetcher should follow" : "กี่เส้นทางที่ตัวเรียกฟีดควรทำตาม",
    "Maximum feed page size" : "ขนาดหน้าฟีดสูงสุด",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "ขนาดฟีดสูงสุดเป็นไบต์ หากหน้า RSS/Atom มีขนาดใหญ่กว่าค่านี้การอัพเดทจะถูกยกเลิก",
    "Feed fetcher timeout" : "ตัวเรียกฟีดหมดเวลา",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "จำนวนวินาทีสูงสุดของ RSS หรือ Atom เพื่อรอโหลดฟีด ถ้ามันใช้เวลานานในการอัพเดทจะถูกยกเลิก",
    "Explore Service URL" : "สำรวจบริการ URL",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "หากได้รับบริการ URL นี้ คุณจะได้รับการสอบถามการสำรวจการแสดงของฟีด ปล่อยว่างไว้หากคุณไม่ต้องการมัน",
    "Saved" : "บันทึกแล้ว",
    "Download" : "ดาวน์โหลด",
    "Close" : "ปิด",
    "Ajax or webcron cron mode detected! Your feeds will not be updated correctly. It is recommended to either use the operating system cron or a custom updater." : "ตรวจพบโหมด Ajax หรือ webcron! ฟีดของคุณจะไม่ได้รับการปรับปรุงอย่างถูกต้อง แนะนำให้ใช้ระบบ cron หรืออัพเดทด้วยตนเอง",
    "How to set up the operating system cron" : "วิธีการตั้งค่าระบบปฏิบัติการ cron",
    "How to set up a custom updater (faster and no possible deadlock) " : "วิธีการติดตั้งการอัพเดทที่กำหนดเอง (ได้เร็วขึ้นและไม่มีการหยุดชะงัก)",
    "Subscribe" : "สมัครรับข้อมูล",
    "Refresh" : "รีเฟรช",
    "No articles available" : "ไม่มีบทความที่",
    "No unread articles available" : "ไม่มีบทความที่ยังไม่ได้อ่าน",
    "Open website" : "เปิดเว็บไซต์",
    "Star article" : "บทความติดดาว",
    "Unstar article" : "ยกเลิกติดดาวบทความ",
    "Keep article unread" : "ตั้งเป็นยังไม่ได้อ่านบทความ",
    "Remove keep article unread" : "ลบการตั้งเป็นยังไม่ได้อ่านบทความ",
    "by" : "โดย",
    "from" : "จาก",
    "Play audio" : "เล่นเพลง",
    "Download video" : "ดาวน์โหลดวิดีโอ",
    "Download audio" : "ดาวน์โหลดเพลง",
    "Keyboard shortcut" : "แป้นพิมพ์ลัด",
    "Description" : "คำอธิบาย",
    "right" : "ขวา",
    "Jump to next article" : "ข้ามไปยังบทความถัดไป",
    "left" : "ซ้าย",
    "Jump to previous article" : "ข้ามไปยังบทความก่อนหน้านี้",
    "Toggle star article" : "สลับบทความติดดาว",
    "Star article and jump to next one" : "บทความติดดาวและกระข้ามไปอีกหน้าหนึ่ง",
    "Toggle keep current article unread" : "สลับให้บทความในปัจจุบันยังไม่ได้อ่าน",
    "Open article in new tab" : "เปิดบทความในแท็บใหม่",
    "Toggle expand article in compact view" : "สลับการขยายบทความในมุมมองที่เล็กลง",
    "Load next feed" : "โหลดฟีดถัดไป",
    "Load previous feed" : "โหลดฟีดก่อนหน้านี้",
    "Load next folder" : "โหลดโฟลเดอร์ถัดไป",
    "Load previous folder" : "โหลดโฟลเดอร์ก่อนหน้า",
    "Scroll to active navigation entry" : "เลื่อนเพื่อใช้งานรายการนำทาง",
    "Focus search field" : "โฟกัสช่องค้นหา",
    "Mark current article's feed/folder read" : "ทำเครื่องหมายอ่านบทความปัจจุบัน ฟีด/โฟลเดอร์",
    "Web address" : "ที่อยู่เว็บ",
    "Feed exists already!" : "ฟีดมีอยู่แล้วในระบบ!",
    "Folder" : "แฟ้มเอกสาร",
    "No folder" : "ไม่มีโฟลเดอร์",
    "New folder" : "โฟลเดอร์ใหม่",
    "Folder name" : "ชื่อโฟลเดอร์",
    "Go back" : "กลับไป",
    "Folder exists already!" : "โฟลเดอร์มีอยู่แล้วในระบบ",
    "New Folder" : "โฟลเดอร์ใหม่",
    "Create" : "สร้าง",
    "Explore" : "สำรวจ",
    "Deleted feed" : "ฟีดที่ถูกลบ",
    "Undo delete feed" : "ยกเลิกการลบฟีด",
    "Rename" : "เปลี่ยนชื่อ",
    "Menu" : "เมนู",
    "No feed ordering" : "ไม่มีรายการฟีด",
    "Reversed feed ordering" : "ย้อนกลับรายการฟีด",
    "Normal feed ordering" : "รายการฟีดปกติ",
    "Enable full text feed fetching" : "เปิดการใช้งานการเรียกข้อความฟีดแบบเต็ม",
    "Disable full text feed fetching" : "ปิดการใช้งานการเรียกข้อความฟีดแบบเต็ม",
    "Rename feed" : "เปลี่ยนชื่อฟีด",
    "Delete feed" : "ลบ feed",
    "Mark all articles read" : "ทำเครื่องหมายอ่านบทความทั้งหมด",
    "Dismiss" : "ยกเลิก",
    "Collapse" : "ย่อ",
    "Deleted folder" : "โฟลเดอร์ที่ถูกลบ",
    "Undo delete folder" : "ยกเลิกการลบโฟลเดอร์",
    "Rename folder" : "เปลี่ยนชื่อโฟลเดอร์",
    "Delete folder" : "ลบโฟลเดอร์",
    "Starred" : "ติดดาวแล้ว",
    "Unread articles" : "บทความที่ยังไม่ได้อ่าน",
    "All articles" : "บทความทั้งหมด",
    "Settings" : "ตั้งค่า",
    "Keyboard shortcuts" : "ปุ่มลัด",
    "Disable mark read through scrolling" : "ปิดการใช้งานเครื่องหมายอ่านอ่านแล้วผ่านการเลื่อน",
    "Compact view" : "มุมมองขนาดเล็ก",
    "Expand articles on key navigation" : "ขยายบทความเกี่ยวกับการนำทางที่สำคัญ",
    "Show all articles" : "แสดงบทความทั้งหมด",
    "Reverse ordering (oldest on top)" : "ย้อนกลับรายการ (เก่าที่สุดอยู่ด้านบน)",
    "Subscriptions (OPML)" : "สมัครเป็นสมาชิก (OPML)",
    "Import" : "นำเข้า",
    "Export" : "ส่งออก",
    "Error when importing: file does not contain valid OPML" : "ข้อผิดพลาดเมื่อนำเข้า: ไฟล์มี OPML ที่ไม่ถูกต้อง",
    "Unread/Starred Articles" : "บทความที่ ยังไม่ได้อ่าน/ติดดาว",
    "Error when importing: file does not contain valid JSON" : "ข้อผิดพลาดเมื่อนำเข้า: ไฟล์มี JSON ที่ไม่ถูกต้อง"
},
"nplurals=1; plural=0;");
