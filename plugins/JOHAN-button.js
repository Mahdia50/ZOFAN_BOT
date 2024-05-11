let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*قـائـمـة الـاوامــر*'
            },
            body: {
              text: '🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس هنا ',
                    sections: [
                      {
                        title: 'قوائم البوت',
                        highlight_label: 'اختار',
                        rows: [
                          {
                            header: 'قسم الانمي',
                            title: '.الانمي',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: 'قسم الاوامر',
                            title: '.المهام',
                            description: '╭━━━[ *قائمه الاوامر* ]━━━━⬣
┃ *↵ اهلا يا روحي "امبرطور شرالشيطاني زوافان" معاك بوت اسمي زوافان "*
╰━━━〔 *🛡️ 1.4.9* 〕━━━━━⬣
╭━━━[ *المعلومات الخاصه ب المطور و البوت* ]━━━━⬣
┇اسم البوت🤖: *ايس 
┇اسم المالك👑: *زوافان*
┇المنصه📡: *ريبلايت*
╰━━━〔 *🛡️ 1.4.9* 〕━━━━━⬣
╭━━━[ *اليك قائمه اوامر البوت* ]━━━━⬣
*حط نقطه قبل اي امر*
╭━━━[ *العاب البوت 🤖* ]━━━━⬣
*🎆احزر*
*🎆كوره*
*🎆علم*
*🎆عين*
*🎆 مانغا*
*🎆شخصيه*
*🎆رياضيات*
*🎆شطرنج*
*🎆تفكيك*
*🎆اكس او*
*🎆لعبه*
*🎆صيد*
*🎆سؤال*
*🎆ديني*
╭━━━[ *قسم البنك و جمع الاكسبي و الالماس 🏦* ]━━━━⬣
*💸التفعيل مثال التفعيل.ايتاتشي.15*
*💸تسجيل-خروج*
*💸راتب*
*💸رهان*
*💸شراء-جواهر*
*💸عديه*
*💸شراء-الماس*
*💸يومي*
*💸البنك*
*💸المتصدرين*
*💸لفل*
*💸الماسي*
*💸تعدين*
*💸عمله2*
*💸هجوم*
*💸رمزي*
╭━━━[ *صور 🖼️* ]━━━━⬣
*⚽رونالدو*
*⚽ميسي*
*⚽قدوتي*
*⚽بلاك-بينك*
*⚽حكمه*
*⚽قط*
*⚽خلفيه*
*⚽تطقيم*
╭━━━[ *اوامر السوشيال ميديا و التحميل 🔃* ]━━━━⬣
*🌊يوتيوبي*
*🌊تطبيق*
*🌊الطقس*
*🌊تحسين*
*🌊التوقيت*
*🌊الوان*
*🌊بوليس*
*🌊بلور*
*🌊تشويش*
*🌊تفريغ*
*🌊انمي*
*🌊فيلم*
*🌊شغل*
*🌊توكتوك*
*🌊انستغرام*
*🌊تلوكولر*
*🌊انمي*
*🌊جيتهوب*
*🌊تحميل*
*🌊فيسبوك*
*🌊فريبيك*
*🌊متجر*
*🌊بحث*
*🌊صوره*
*🌊تخيل*
*🌊انستا*
*🌊تيك*
*🌊صوت*
*🌊تحسين*
*🌊لكرتون*
*🌊لفيديو*
╭━━━[ *قسم المطور 🤴🏻* ]━━━━⬣
*🌟اعلان*
*🌟فيروس*
*🌟بريم*
*🌟خفض-التميز*
*🌟نظف*
*🌟اضف-اكسبي*
*🌟اضف-الماس*
*🌟نشر*
*🌟حظر*
*🌟المحظورين*
*🌟sp*
*🌟 اضف-مطور*
*🌟فرمت*
*🌟بان*
*🌟بلوك*
*🌟اين-الخطاء*
*🌟بوليجون*
*🌟رسترات*
*🌟رفع-بلوك*
*🌟البلوكات*
*🌟فك-الحظر*
*🌟انضم*
*🌟اخرج*
*🌟فك-البان*
╭━━━[ *اوامر المرح 🎡* ]━━━━⬣
*🤡كذبتي*
*🤡رجولتي*
*🤡شبيهي*
*🤡لو*
*🤡ظهر*
*🤡تسريع*
*🤡السرعه*
*🤡خط*
*🤡زخرفه*
*🤡فزوره*
*🤡الشخصيه*
*🤡صراحه*
*🤡انصح*
*🤡تاج*
*🤡تهكير*
*🤡غباء*
*🤡الحب*
*🤡كت*
*🤡هل*
*🤡مقولات

╭━━━[ *اوامر الجروبات و المجموعات 🐉* ]━━━━⬣
*🦕انذار*
*🦕الغاء-الانذار*
*🦕احذف*
*🦕ابلاغ*
*🦕الجروب*
*🦕الجروبات*
*🦕دعوه*
*🦕تغير-الوصف*
*🦕تغير-الاسم*
*🦕تغير-الترحيب*
*🦕تغير-الصوره*
*🦕تغير-اللينك*
*🦕الدعم*
*🦕تغير-الوداع*
*🦕تغير-الترحيب*
*🦕منشن*
*🦕مخفي*
*🦕لمنشن*
*🦕منشني*
*🦕جروب فتح*
*🦕جروب غلق*
*🦕اكشف*
*🦕لينك*
*🦕المشرفين*
*🦕الاشباح*
*🦕مغير الصوت*
*🦕عميق*
*🦕منفوخ*
*🦕تخين*
*🦕صاخب*
*🦕سريع*
*🦕رفيع*
*🦕تقطيع*
*🦕روبوت*
*🦕بطيء*
*🦕ناعم*
*🦕سنجاب*
*خاص ب الاصوات✌🏻*
*🦕انطق*
*🦕الدعم*
╭━━━[ *اوامر الملصقات 💫* ]━━━━⬣
*🐦دمج*
*🐦ملصق*
*🐦سرقه*
*🐦مدور*
*🐦ستك*
*🐦تعليق*
╭━━━[ *اوامر الدين 💓* ]━━━━⬣
*🕋دين*
*🕋ايات*
*🕋اسماء-الله*
*🕋اذكار الصباح*
*🕋اذكار المساء*

*❶ - يمنع منعا بتا سب البوت.*
*❷ - استخدام البوت بشكل متوازن و بدون تسبب ازعاج للاعضاء.*

~⌬ تــ✍︎ــوقــيــعي
* 𝑍𝑂𝐹𝐴𝑁 𝐵𝑂𝑇 *

╰━━━〔 *🛡️ 1.4.9* 〕━━━━━⬣',
                            id: 'te'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['امم']

export default handler
