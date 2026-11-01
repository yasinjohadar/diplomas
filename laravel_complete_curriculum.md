# المنهاج الشامل لتعلم Laravel من الصفر حتى مستوى الخبير

> فهرس تعليمي متدرج. يجب تثبيت إصدار Laravel وPHP المستخدم في الدورة
> ومراجعة التوثيق الرسمي عند إعداد الشروحات.

## المرحلة الأولى: التأسيس قبل Laravel

### الوحدة 1: مقدمة في تطوير الويب

-   كيف يعمل الويب؟ Client وServer؛ Frontend وBackend؛ Web Server
    وApplication Server.
-   دورة حياة HTTP Request وHTTP Response؛ HTTP وHTTPS؛ Methods وStatus
    Codes وHeaders.
-   DNS وDomain Names والاستضافة؛ Cookies وSessions؛ JSON وXML؛ REST
    وAPI.
-   MVC ومفهوم Framework؛ Git وGitHub؛ بيئات Development وTesting
    وProduction.

### الوحدة 2: إعداد بيئة التطوير

-   تثبيت PHP وComposer وإعداد PATH وPHP Extensions.
-   إعداد VS Code أو PhpStorm وإضافات PHP وTerminal.
-   إعداد Linux أو Windows أو macOS وبيئة محلية أو Docker.
-   تثبيت MySQL أو MariaDB وأدوات إدارة قواعد البيانات.
-   إعداد Git والمستودعات وملفات البيئة.

### الوحدة 3: أساسيات PHP

-   PHP Runtime وكتابة أول برنامج والتعليقات.
-   المتغيرات والثوابت وأنواع البيانات والتحويل بينها.
-   Operators والمقارنات والشروط if وelseif وelse وswitch وmatch.
-   حلقات for وwhile وdo while وforeach.
-   Arrays بأنواعها وعملياتها.
-   Strings ودوال mb\_\* ودعم Unicode.
-   Functions وParameters وReturn Values وDefault وNamed Arguments.
-   Scope وAnonymous Functions وClosures وArrow Functions.
-   الملفات وInclude وRequire.
-   Error Handling وExceptions وtry/catch/finally.
-   التاريخ والوقت وJSON وSuperglobals.
-   Forms وGET وPOST وSessions وCookies.
-   Composer Autoloading وتنظيم تطبيق PHP.
-   بناء تطبيق PHP صغير دون إطار عمل.

### الوحدة 4: البرمجة كائنية التوجه في PHP

-   Classes وObjects وProperties وMethods وConstructors.
-   Visibility وEncapsulation وInheritance وOverriding.
-   Static Members وClass Constants.
-   Abstract Classes وInterfaces وTraits وNamespaces.
-   Autoloading وPSR-4.
-   Type Declarations وReturn Types وNullable وUnion وIntersection
    Types.
-   Enums وReadonly Properties وAttributes وReflection.
-   Dependency Injection وComposition مقابل Inheritance.
-   SOLID: SRP وOCP وLSP وISP وDIP.
-   Design by Contract وException Hierarchies.
-   Generators وIterators وكتابة كود قابل للاختبار.

### الوحدة 5: Composer ومعايير PHP

-   Composer وcomposer.json وcomposer.lock.
-   تثبيت الحزم وإزالتها وتحديثها وإدارة Dependencies.
-   Semantic Versioning وAutoload وPSR-4 وComposer Scripts.
-   Composer Audit والحزم الخاصة.
-   PSR-1 وPSR-4 وPSR-12 وPSR-3 وPSR-7 وPSR-11 وPSR-15 وPSR-18.
-   إنشاء Package PHP صغيرة.

### الوحدة 6: قواعد البيانات وSQL

-   قواعد البيانات العلائقية وDatabase وSchema وTable وRows وColumns.
-   Data Types وPrimary Keys وForeign Keys وConstraints.
-   CRUD وSELECT وWHERE وORDER BY وLIMIT وINSERT وUPDATE وDELETE.
-   Aggregate Functions وGROUP BY وHAVING.
-   INNER وLEFT وRIGHT وCROSS JOIN.
-   Subqueries وUNION.
-   Indexes وB-Tree وB+Tree وComposite Indexes.
-   Transactions وACID وNormalization.
-   علاقات One-to-One وOne-to-Many وMany-to-Many.
-   Views وStored Procedures وTriggers.
-   EXPLAIN وتحليل الاستعلامات والنسخ الاحتياطي وأمن قواعد البيانات.

### الوحدة 7: المفاهيم المعمارية الأساسية

-   Framework وMVC وSeparation of Concerns وRequest Lifecycle.
-   Routing وControllers وModels وViews وMiddleware.
-   Dependency Injection وService Container.
-   Repository وService Layer ومتى نحتاجهما.
-   Events وListeners وQueues وBackground Processing.
-   Caching وConfiguration وLogging وTesting.
-   Clean Code وSOLID وDesign Patterns.

## المرحلة الثانية: أساسيات Laravel

### الوحدة 8: مقدمة إلى Laravel

-   ما هو Laravel ولماذا نستخدمه؟ تاريخه وفلسفته وتطور إصداراته.
-   سياسة الدعم والإصدارات وإصدارات PHP المتوافقة.
-   مقارنة Laravel بالأطر الأخرى ومميزاته وحدود استخدامه.
-   متطلبات التشغيل والتوثيق الرسمي ومجتمع Laravel.

### الوحدة 9: تثبيت Laravel وإنشاء المشروع

-   Laravel Installer وComposer وإنشاء مشروع جديد.
-   بنية المجلدات والملفات وتشغيل خادم التطوير.
-   .env وAPP_KEY وملفات config.
-   إعداد قاعدة البيانات وTimezone وLocale وDebug وLogging.
-   Artisan وTinker وGit وبيئة التطوير.

### الوحدة 10: بنية Laravel ودورة حياة الطلب

-   app وbootstrap وconfig وdatabase وpublic وresources وroutes وstorage
    وtests وvendor.
-   public/index.php وBootstrap Application.
-   HTTP Kernel أو آلية معالجة الطلب وفق الإصدار.
-   Service Providers وMiddleware Pipeline وRouter وController
    Dispatching.
-   Response Lifecycle وException Handling وConsole Lifecycle.

### الوحدة 11: Configuration وEnvironment

-   ملفات config وEnvironment Variables.
-   env() داخل ملفات الإعدادات وconfig() داخل التطبيق.
-   إعدادات البيئات المختلفة وConfig Caching.
-   إدارة الأسرار وعدم رفع .env إلى Git.
-   إعدادات Production والاختبار والتحقق من Configuration.

### الوحدة 12: Artisan وTinker للمبتدئين

-   استعراض أوامر Artisan وإنشاء Controllers وModels وMigrations.
-   إنشاء Middleware وRequests وResources وCommands.
-   إنشاء Jobs وEvents وListeners وNotifications وMailables.
-   تشغيل Migrations وSeeders واستخدام Tinker.

## المرحلة الثالثة: Routing وControllers وHTTP

### الوحدة 13: Routing في Laravel

-   مفهوم Routing وملفات Web Routes وAPI Routes.
-   GET وPOST وPUT وPATCH وDELETE.
-   Route Parameters وOptional Parameters وConstraints.
-   Named Routes وRoute Groups وPrefix وName Prefix.
-   Middleware Groups وRoute Model Binding.
-   Implicit وExplicit Binding وCustom Route Keys وScoped Bindings.
-   Resource Routes وAPI Resource Routes وSingleton Resources.
-   Redirects وFallback وRoute Closures.
-   Route Caching وroute:list وترتيب المسارات وتجنب التعارض.
-   تنظيم Routes وحمايتها وبناء نظام Routing احترافي.

### الوحدة 14: Controllers

-   مفهوم Controllers وإنشاؤها وController Methods.
-   Route Parameters وDependency Injection.
-   Invokable وResource وAPI Controllers.
-   Controller Middleware وForm Requests.
-   Response Types وRedirect وJSON وDownload Responses.
-   تقليل مسؤوليات Controllers وفصل Business Logic.
-   تنظيم Controllers واختبارها.

### الوحدة 15: HTTP Request وResponse

-   Request Object وInput وQuery Parameters وHeaders وCookies.
-   Uploaded Files وInput Sanitization وJSON Requests وContent Types.
-   بناء Responses وHeaders وStatus Codes وRedirects.
-   Cookies وSessions وStreaming Responses وFile Downloads.
-   HTTP Exceptions وRequest Lifecycle عمليًا.

### الوحدة 16: Middleware

-   Middleware وإنشاؤه وGlobal وRoute Middleware.
-   Middleware Groups وترتيب التنفيذ وتمرير البيانات.
-   Middleware Parameters وAuthentication وAuthorization.
-   Rate Limiting وCORS وCustom Headers.
-   تسجيل الطلبات ومنع الوصول وفق شروط.
-   الاستجابات وTerminable Middleware والاختبارات.

## المرحلة الرابعة: Views وواجهات المستخدم

### الوحدة 17: Blade Templating

-   Views وتمرير البيانات وBlade Echo وEscaping وRaw Output.
-   Layouts وSections وYields وTemplate Inheritance وIncludes.
-   Components وAnonymous Components وProps وSlots وAttributes.
-   Conditionals وLoops وForelse وSwitch.
-   Stacks وPush وPrepend وCustom Directives وBlade Comments.
-   View Composers وView Caching وتنظيم الواجهات.
-   حماية مخرجات Blade من XSS.

### الوحدة 18: Frontend Assets وVite

-   Asset Bundling وVite وJavaScript وCSS.
-   npm وPackage Scripts وتثبيت Bootstrap وTailwind.
-   تنظيم ملفات الواجهة والصور والخطوط.
-   Asset Versioning وHMR وProduction Build.
-   Code Splitting وإدارة Dependencies وتحسين أحجام الملفات.

### الوحدة 19: Forms وواجهة المستخدم

-   HTML Forms وGET وPOST وCSRF Token.
-   Old Input وValidation Errors وForm Components.
-   File Uploads وSelect وCheckbox وRadio.
-   CRUD وPagination وSearch وFiltering.
-   Flash Messages وLocalization وRTL وAccessibility.

## المرحلة الخامسة: قواعد البيانات وEloquent ORM

### الوحدة 20: Migrations

-   Migrations وSchema Builder وإنشاء وتعديل وحذف الجداول.
-   أنواع الأعمدة وDefault وNullable وIndexes وUnique Constraints.
-   Foreign Keys وCascade وRestrict وComposite Indexes.
-   Renaming وChanging Columns وRollback وRefresh وReset.
-   Migration Order وProduction Migrations وBackward Compatibility.

### الوحدة 21: Seeders وFactories

-   Seeders وإنشاؤها وتشغيلها وDatabaseSeeder.
-   Model Factories وFaker وFactory States.
-   Factory Relationships وإنشاء بيانات مترابطة.
-   بيانات الاختبار والتطوير ومنع بيانات التجربة في Production.
-   بناء Dataset واقعي.

### الوحدة 22: Eloquent ORM

-   ORM وModel وNaming Conventions وTable وPrimary Key Configuration.
-   Fillable وGuarded وMass Assignment.
-   Create وUpdate وFind وFirst وGet.
-   Where وOrWhere وSelect وOrderBy وLimit وOffset وPagination.
-   Chunk وChunkById وLazy Collections.
-   Soft Deletes وGlobal وLocal Scopes.
-   Model Events وObservers.
-   Accessors وMutators وAttribute Casting وCustom Casts.
-   Date وEncrypted Casts وUUID وULID.
-   Serialization وHidden وVisible وAppends وTouches.
-   Model Lifecycle.

### الوحدة 23: Eloquent Relationships

-   One-to-One وOne-to-Many وMany-to-One وMany-to-Many.
-   Has One Through وHas Many Through.
-   Polymorphic One-to-One وOne-to-Many وMany-to-Many.
-   Pivot Tables وPivot Attributes وCustom Pivot Models.
-   Eager وLazy وLazy Eager Loading.
-   Nested وConstrained Eager Loading.
-   Relationship Existence Queries وwhereHas وwhereDoesntHave.
-   withCount وwithSum وwithAvg.
-   Associate وDissociate وAttach وDetach وSync وSyncWithoutDetaching.
-   N+1 ومنع Lazy Loading غير المقصود واختبار العلاقات.

### الوحدة 24: Query Builder وSQL المتقدم

-   Query Builder وSelect وAddSelect وWhere Conditions.
-   WhereIn وWhereBetween وJoins وSubqueries وRaw Expressions.
-   Aggregates وGroupBy وHaving وUnions.
-   Conditional Queries وQuery Scopes.
-   Pagination وCursor Pagination وChunking.
-   Upsert وBulk Insert وUpdate.
-   Query Logging وEXPLAIN وQuery Optimization.
-   Parameter Binding وتجنب SQL Injection.
-   متى تستخدم Eloquent ومتى Query Builder؟

### الوحدة 25: Transactions وDatabase Concurrency

-   Transactions وACID وDB::transaction وManual Transactions.
-   Nested Transactions وSavepoints وCommit وRollback.
-   Isolation Levels وDeadlocks وRow-Level Locks.
-   lockForUpdate وsharedLock.
-   Optimistic وPessimistic Locking.
-   Race Conditions ومنع التحديثات المتعارضة.
-   Retry عند Deadlocks.
-   Transactions مع Events وJobs وafterCommit.
-   اختبار Concurrency.

## المرحلة السادسة: Validation وAuthentication وAuthorization

### الوحدة 26: Validation

-   Validation داخل Controllers وValidator Facade وvalidate Method.
-   Form Request Classes.
-   Required وNullable وSometimes وString وNumeric وBoolean.
-   Email وURL وDate وConfirmed وUnique وExists.
-   File وImage وArray وNested Array Validation.
-   Conditional Validation وCustom Rules وClosures.
-   Custom Messages وAttributes وLocalization.
-   Validation للـ API وJSON وBusiness Rules.
-   اختبار Validation.

### الوحدة 27: Authentication

-   Authentication وAuthorization وLaravel Authentication Architecture.
-   Guards وProviders وSession Authentication.
-   Login وLogout وRegistration وPassword Hashing.
-   Password Confirmation وRemember Me.
-   Email Verification وPassword Reset وPassword Policies.
-   Multi-Factor وTwo-Factor Authentication.
-   Login Rate Limiting وSession Regeneration وInvalidation.
-   Custom Guards وUser Providers.
-   Social Authentication وOAuth وSSO.
-   Authentication Testing.

### الوحدة 28: Authorization

-   Gates وPolicies وإنشاء Policy وPolicy Methods.
-   Authorization Middleware وauthorize وcan.
-   Blade Authorization Directives.
-   Authorization في Controllers وAPIs وResources.
-   Ownership Checks.
-   RBAC وPermission-Based Access Control وABAC.
-   Hierarchical Roles وMulti-Tenant Authorization.
-   منع IDOR واختبار الصلاحيات.

### الوحدة 29: إدارة المستخدمين والحسابات

-   User Model وملف المستخدم الشخصي.
-   تغيير البريد وكلمة المرور وإدارة الجلسات.
-   تسجيل الخروج من جميع الأجهزة.
-   تعطيل الحساب وحذفه واستعادته.
-   الأجهزة الموثوقة وسجل تسجيل الدخول.
-   Account Verification وصور المستخدمين والإعدادات.
-   تفضيلات الإشعارات والحسابات المؤسسية.

## المرحلة السابعة: بناء RESTful APIs

### الوحدة 30: أساسيات REST API

-   API وREST وREST Constraints وResource-Oriented Design.
-   HTTP Methods وStatus Codes وHeaders وJSON.
-   Naming Conventions وResource URLs.
-   Filtering وSorting وSearching وPagination.
-   API Error Format وIdempotency.
-   API Documentation وVersioning وAPI Contract.

### الوحدة 31: بناء APIs في Laravel

-   API Routes وControllers وJSON Responses.
-   API Resources وResource Collections وConditional Attributes.
-   Nested Resources وPagination Responses.
-   Form Requests وAPI Validation.
-   Exception Rendering وAPI Error Handling.
-   API Middleware وRate Limiting وAuthentication وAuthorization.
-   Versioned Routes وDeprecation.
-   OpenAPI وSwagger وبناء REST API متكامل.

### الوحدة 32: Laravel Sanctum

-   Sanctum وSession Authentication للـ SPA.
-   CSRF Cookie Flow وAPI Tokens.
-   إنشاء Tokens وToken Abilities وExpiration وRevocation.
-   Token Rotation Concepts.
-   حماية SPA وإعداد CORS وStateful Domains.
-   حماية API Routes واختبار Sanctum.
-   اختيار Sanctum أو Passport.

### الوحدة 33: Laravel Passport وOAuth 2.0

-   OAuth 2.0 ومكوناته وأدواره.
-   Authorization Code Flow وPKCE.
-   Client Credentials Flow وRefresh Tokens وScopes.
-   Token Revocation وOpenID Connect Overview.
-   إعداد Passport وإنشاء Clients وحماية APIs.
-   إدارة الصلاحيات وتخزين Tokens وأمن OAuth.
-   متى تستخدم Passport؟

### الوحدة 34: API Security وDocumentation

-   حماية API Endpoints وRate Limiting وRequest Size Limits.
-   Input Validation وOutput Filtering ومنع Mass Assignment وIDOR.
-   حماية Pagination ومنع Enumeration.
-   CORS وCSRF في SPA وToken Security وAPI Keys.
-   Request Signing وOpenAPI وSwagger UI.
-   API Versioning وContract Testing وAPI Changelog.
-   بناء API Developer Experience.

## المرحلة الثامنة: الملفات والتخزين والبريد والإشعارات

### الوحدة 44: Filesystem وStorage

1.  نظام الملفات في Laravel.
2.  مفهوم Filesystem Disks.
3.  إعداد config/filesystems.php.
4.  التخزين المحلي.
5.  storage/app وpublic وstorage:link.
6.  الفرق بين Public وPrivate Storage.
7.  رفع الملفات.
8.  التحقق من الملفات المرفوعة.
9.  حفظ الملفات باستخدام Storage Facade.
10. إنشاء المجلدات وحذفها.
11. إعادة تسمية الملفات ونقلها.
12. قراءة محتوى الملفات.
13. إنشاء روابط الملفات.
14. Download Responses.
15. Temporary URLs.
16. Private File Downloads.
17. Local وPublic Disks.
18. Amazon S3.
19. S3-Compatible Object Storage.
20. ربط MinIO.
21. ربط Cloudflare R2 أو خدمات Object Storage المتوافقة.
22. إدارة صلاحيات الملفات.
23. التعامل مع أسماء الملفات بأمان.
24. منع Path Traversal.
25. فحص الملفات قبل قبولها.
26. التعامل مع MIME Types.
27. فحص الملفات المشبوهة باستخدام خدمات متخصصة عند الحاجة.
28. معالجة الملفات الكبيرة.
29. Streaming Uploads وDownloads.
30. رفع الملفات مباشرة إلى Object Storage.
31. التعامل مع الملفات المؤقتة.
32. تنظيف الملفات غير المستخدمة.
33. Storage Versioning وLifecycle Policies.
34. تصميم نظام ملفات لملايين المستخدمين.

### الوحدة 45: Mail --- البريد الإلكتروني

1.  آلية إرسال البريد في Laravel.
2.  إعداد SMTP.
3.  إعداد Mail Providers.
4.  Mailables.
5.  إنشاء Email Templates.
6.  Blade Email Templates.
7.  Markdown Mail.
8.  HTML وPlain Text Emails.
9.  إرسال البريد من Controllers.
10. إرسال البريد من Services.
11. Queued Mail.
12. Attachments.
13. Inline Attachments.
14. إرسال البريد إلى عدة مستلمين.
15. CC وBCC.
16. Email Verification.
17. Password Reset Emails.
18. تخصيص رسائل النظام.
19. Localization للبريد.
20. إعدادات البريد حسب البيئة.
21. Mailpit وMailtrap للاختبار.
22. التعامل مع Mailjet أو مزودي SMTP.
23. إعداد SPF وDKIM وDMARC على مستوى البريد والنطاق.
24. تحسين Deliverability.
25. Bounce وComplaint Handling.
26. تتبع حالة الرسائل عبر Webhooks.
27. إعادة المحاولة عند فشل الإرسال.
28. منع إرسال الرسالة نفسها مرتين.
29. تصميم Email Templates احترافية.
30. اختبار رسائل البريد.

### الوحدة 46: Notifications

1.  مفهوم Notifications.
2.  إنشاء Notification Class.
3.  قنوات الإشعارات.
4.  Mail Notifications.
5.  Database Notifications.
6.  Broadcast Notifications.
7.  SMS Notifications عبر مزود خارجي.
8.  Slack Notifications.
9.  Custom Notification Channels.
10. إرسال الإشعارات إلى المستخدمين.
11. الإشعارات الفورية Queued Notifications.
12. الإشعارات المخصصة لكل مستخدم.
13. قراءة الإشعارات.
14. تعليم الإشعارات كمقروءة.
15. حذف الإشعارات.
16. Unread Notifications Count.
17. Notification Preferences.
18. إشعارات الأحداث المهمة.
19. إشعارات العمليات الطويلة.
20. تجميع الإشعارات.
21. منع الإشعارات المكررة.
22. التعامل مع الإشعارات الفاشلة.
23. Notification Templates.
24. Localization.
25. بناء مركز إشعارات كامل.

### الوحدة 47: Localization والترجمة

1.  مفهوم Localization وInternationalization.
2.  إعداد اللغة الافتراضية.
3.  ملفات الترجمة.
4.  Translation Strings.
5.  JSON Translations.
6.  \_\_() وtrans().
7.  Translation Parameters.
8.  Pluralization.
9.  تحديد اللغة من المستخدم.
10. Middleware لتغيير اللغة.
11. حفظ تفضيلات اللغة.
12. ترجمة Validation Messages.
13. ترجمة Notifications.
14. ترجمة رسائل API.
15. الترجمة الديناميكية للمحتوى.
16. دعم RTL.
17. تنسيق التاريخ والوقت.
18. تنسيق الأرقام والعملات.
19. التعامل مع المناطق الزمنية.
20. اختبار الترجمات.
21. تصميم تطبيق متعدد اللغات.
22. فصل ترجمة الواجهة عن ترجمة محتوى قاعدة البيانات.

### الوحدة 48: التواريخ والمناطق الزمنية

1.  التعامل مع التاريخ والوقت في PHP.
2.  Carbon.
3.  Date Casting في Eloquent.
4.  Parsing وFormatting.
5.  مقارنة التواريخ.
6.  إضافة وطرح الفترات الزمنية.
7.  Timezones.
8.  تخزين الوقت في UTC.
9.  عرض الوقت حسب المنطقة الزمنية للمستخدم.
10. التعامل مع التوقيت الصيفي.
11. Date Validation.
12. جدولة الأحداث.
13. حساب المدد الزمنية.
14. التعامل مع المواعيد المتكررة.
15. حفظ التواريخ في قاعدة البيانات.
16. أخطاء التوقيت في التطبيقات متعددة المناطق.
17. اختبار العمليات المرتبطة بالتاريخ.
18. بناء نظام حجوزات ومواعيد.

## المرحلة التاسعة: Queues وJobs والعمليات الخلفية

### الوحدة 49: Queue System

1.  ما هي Queues ولماذا نحتاج إليها؟
2.  الفرق بين Synchronous وAsynchronous Processing.
3.  إنشاء Jobs.
4.  Dispatch Jobs.
5.  Queue Connections.
6.  Queue Drivers.
7.  Database Queue.
8.  Redis Queue.
9.  SQS ومزودات الطوابير الخارجية.
10. إعداد Queue Configuration.
11. تشغيل Queue Workers.
12. تحديد Queue Names.
13. Priority Queues.
14. تشغيل عدة Workers.
15. Worker Options.
16. Queue Timeouts.
17. Job Timeouts.
18. Max Attempts.
19. Retry Policies.
20. Backoff Strategies.
21. Delayed Jobs.
22. Unique Jobs.
23. Overlapping Jobs.
24. Middleware للـ Jobs.
25. التعامل مع Failed Jobs.
26. إعادة تشغيل Failed Jobs.
27. تنظيف سجل Failed Jobs.
28. التعامل مع Job Exceptions.
29. Job Chaining.
30. Job Batching.
31. Batch Progress.
32. Cancellation.
33. التعامل مع Jobs التي تستغرق ساعات.
34. Memory Leaks في Workers.
35. Restarting Workers بعد النشر.
36. Queue Monitoring.
37. Laravel Horizon.
38. التعامل مع Queue Backlogs.
39. تصميم نظام Queues متعدد الأولويات.
40. بناء نظام معالجة خلفية قابل للتوسع.

### الوحدة 50: تصميم Jobs احترافية

1.  مبدأ أن تكون Job صغيرة وواضحة.
2.  Serialization للبيانات داخل Jobs.
3.  لماذا يجب تجنب تمرير Objects ضخمة؟
4.  تمرير معرف السجل بدلًا من البيانات الكاملة.
5.  التعامل مع السجلات التي حُذفت قبل تنفيذ Job.
6.  Idempotency.
7.  Retry Safety.
8.  التعامل مع العمليات غير القابلة للتكرار.
9.  Distributed Locks.
10. تنفيذ Jobs بعد نجاح Transaction.
11. afterCommit.
12. التعامل مع External APIs.
13. Rate Limits للخدمات الخارجية.
14. Circuit Breaker Concept.
15. Retry مع Exponential Backoff.
16. Dead Letter Queues Concept.
17. تسجيل محاولات التنفيذ.
18. مراقبة زمن التنفيذ.
19. إلغاء Jobs.
20. تصميم Workflows طويلة.
21. منع التكرار عند تنفيذ Jobs بالتوازي.
22. اختبار Jobs.
23. محاكاة الفشل وإعادة المحاولة.
24. بناء Pipeline لمعالجة آلاف الملفات.

### الوحدة 51: Scheduling --- المهام المجدولة

1.  مفهوم Task Scheduling.
2.  Laravel Scheduler.
3.  إعداد Cron.
4.  تعريف المهام المجدولة.
5.  تحديد وقت التنفيذ.
6.  Daily وWeekly وMonthly Tasks.
7.  تحديد Timezones.
8.  withoutOverlapping.
9.  onOneServer.
10. تشغيل المهام في الخلفية.
11. شروط تنفيذ المهام.
12. Command Scheduling.
13. Job Scheduling.
14. تنظيف البيانات القديمة.
15. التقارير الدورية.
16. المهام المتكررة على مستوى المستخدم.
17. مراقبة المهام المجدولة.
18. تسجيل مخرجات المهام.
19. التعامل مع فشل Scheduler.
20. مراقبة عدم تنفيذ المهام المتوقعة.
21. تجنب تكرار التنفيذ في عدة خوادم.
22. بناء نظام جدولة للعمليات المؤسسية.

### الوحدة 52: Laravel Horizon وQueue Monitoring

1.  بنية Horizon.
2.  متطلبات Redis.
3.  إعداد Horizon.
4.  تشغيل Horizon.
5.  مراقبة Jobs.
6.  مراقبة Failed Jobs.
7.  مراقبة أوقات التنفيذ.
8.  Queue Balancing.
9.  Supervisor Strategies.
10. Worker Scaling.
11. Horizon Metrics.
12. ضبط Retention.
13. حماية لوحة Horizon.
14. إعداد Horizon في Production.
15. نشر تحديثات Jobs بأمان.
16. تشخيص Queue Backlog.
17. قياس Throughput.
18. تحديد عدد Workers المناسب.
19. مراقبة استهلاك الذاكرة.
20. تصميم استراتيجية Queue Scaling.

## المرحلة العاشرة: Cache وRedis وتحسين الأداء

### الوحدة 53: Cache في Laravel

1.  مفهوم Caching ولماذا نستخدم Cache؟
2.  Cache Drivers: File وDatabase وRedis وMemcached.
3.  Cache::get وput وremember وrememberForever.
4.  add وhas وincrement وdecrement.
5.  Cache TTL وCache Tags عند دعمها من Driver المستخدم.
6.  Cache Invalidation وCache Keys Strategy.
7.  Cache Stampede وCache Warming.
8.  Cache Locks وAtomic Locks.
9.  Cache في Controllers وServices.
10. Query Result Caching وCache للصفحات وAPI Responses.
11. Cache للبيانات الإحصائية والصلاحيات.
12. التعامل مع البيانات المتغيرة وCache Invalidation عبر Events.
13. Distributed Cache.
14. Redis Data Structures وPersistence وMemory Management.
15. Redis Eviction Policies وMonitoring.
16. متى يكون Cache ضارًا؟
17. اختبار Cache Consistency.
18. بناء استراتيجية Cache لتطبيق ضخم.

### الوحدة 54: تحسين أداء Laravel

1.  قياس الأداء قبل التحسين وتحديد Bottlenecks.
2.  تحسين استعلامات قاعدة البيانات ومعالجة N+1.
3.  Eager Loading وIndex Optimization وQuery Profiling.
4.  تقليل عدد الاستعلامات واستخدام select للأعمدة المطلوبة.
5.  استخدام Aggregates داخل SQL وPagination المناسبة.
6.  Caching وConfig Cache وRoute Cache وView Cache.
7.  Event Cache حيث ينطبق.
8.  Composer Optimizations وOPcache.
9.  تحسين PHP-FPM وإعدادات الخادم.
10. تقليل استهلاك الذاكرة وLazy Collections.
11. Streaming Large Responses.
12. Queues للعمليات الثقيلة.
13. تحسين معالجة الصور والملفات وExternal API Calls.
14. Connection Pooling وتحسين Bootstrap Time.
15. Laravel Octane وRoadRunner وSwoole عند الحاجة.
16. تسرب الذاكرة في العمليات طويلة التشغيل.
17. Load Testing وStress Testing.
18. Performance Budgets وP95 وP99 Latency وThroughput.
19. مقارنة الأداء قبل التعديل وبعده.
20. بناء خطة أداء مستندة إلى القياسات.

### الوحدة 55: Laravel Octane والتطبيقات طويلة التشغيل

1.  Long-Lived Application Servers.
2.  الفرق بين PHP-FPM وOctane.
3.  دورة حياة الطلب وإعداد Octane.
4.  Supported Application Servers.
5.  إدارة الحالة بين الطلبات ومنع تسرب بيانات المستخدم.
6.  Singleton State Pitfalls وStatic Variables.
7.  إعادة تحميل Workers وMemory Leaks وWorker Lifecycle.
8.  Concurrent Tasks حيث تدعم البيئة ذلك.
9.  التعامل مع خدمات HTTP طويلة التشغيل.
10. Octane مع Redis وQueues.
11. اختبارات التوافق وقياس التحسن الحقيقي.
12. متى يكون Octane مفيدًا؟ ومتى يكون تحسين SQL أهم منه؟

## المرحلة الحادية عشرة: الأمان المتقدم في Laravel

### الوحدة 56: أساسيات أمن تطبيقات الويب

1.  Threat Modeling.
2.  Least Privilege وDefense in Depth وSecure by Default.
3.  إدارة الأسرار وحماية .env ومفاتيح التطبيق.
4.  HTTPS وأمن الجلسات وكلمات المرور.
5.  إدارة الحسابات والصلاحيات وحماية البيانات الحساسة.
6.  Secure Error Handling وLogging دون تسريب أسرار.
7.  إدارة Dependencies وتحديث Laravel وPHP والحزم.
8.  إدارة الثغرات الأمنية.
9.  OWASP Top 10.
10. Secure Development Lifecycle.

### الوحدة 57: حماية Laravel من الهجمات الشائعة

1.  SQL Injection وParameterized Queries ومخاطر Raw SQL.
2.  XSS: Stored وReflected وDOM-Based وOutput Escaping.
3.  CSRF وCSRF Tokens وSameSite Cookies.
4.  CORS.
5.  SSRF.
6.  Path Traversal.
7.  Local File Inclusion وRemote File Inclusion.
8.  Command Injection.
9.  Mass Assignment.
10. Insecure Direct Object Reference وBroken Access Control.
11. Authentication Bypass.
12. Brute Force وCredential Stuffing.
13. Session Fixation وSession Hijacking.
14. Open Redirects.
15. HTTP Request Smuggling على مستوى الخادم والبنية التحتية.
16. Deserialization Risks.
17. Denial of Service وUnrestricted Resource Consumption.
18. Insecure File Uploads وMIME Spoofing.
19. Race Conditions.
20. Clickjacking وSecurity Headers وContent Security Policy.
21. التعامل مع معلومات الخطأ ومنع كشف بيانات المستخدمين.
22. اختبار حالات الهجوم على تطبيق تجريبي.

### الوحدة 58: التشفير وإدارة كلمات المرور

1.  Hashing مقابل Encryption.
2.  التشفير المتماثل وغير المتماثل.
3.  Password Hashing وLaravel Hash Facade.
4.  Bcrypt وArgon2 وSalting وPassword Rehashing.
5.  لماذا لا تستخدم MD5 أو SHA-1 لتخزين كلمات المرور؟
6.  التحقق من كلمات المرور وقوتها وPassword Policies.
7.  Application Encryption وLaravel Crypt.
8.  Encryption Keys وKey Rotation وتخزين المفاتيح.
9.  تشفير الحقول الحساسة والبيانات أثناء النقل والتخزين.
10. HMAC وDigital Signatures.
11. إدارة Tokens والأسرار الخارجية.
12. Hashing للملفات.
13. متى يكون Hashing مناسبًا ومتى تحتاج إلى Encryption؟
14. بناء نظام آمن لإدارة البيانات الحساسة.

### الوحدة 59: حماية الملفات والرفع والتنزيل

1.  التحقق من نوع الملف وMIME Type والامتداد والحجم.
2.  تغيير أسماء الملفات ومنع Path Traversal.
3.  تخزين الملفات خارج Web Root وPrivate Storage.
4.  Authorization عند تنزيل الملفات.
5.  Signed URLs وTemporary URLs.
6.  حماية ملفات المستخدمين من الوصول المباشر.
7.  منع رفع ملفات تنفيذية وفحص Antivirus عند الحاجة.
8.  معالجة الصور بطريقة آمنة وحماية PDF والمستندات.
9.  التعامل مع Archive Files ومنع Zip Bombs.
10. حدود حجم الطلبات وStreaming وChunked Uploads.
11. Rate Limiting لرفع الملفات.
12. تنظيف الملفات المؤقتة وسياسات الاحتفاظ والحذف.
13. سجل عمليات رفع وتنزيل الملفات.
14. اختبار أمان نظام الملفات.

### الوحدة 60: أمن API المتقدم

1.  Authentication مقابل Authorization.
2.  Token Security وOAuth 2.0 وScope Enforcement.
3.  Object-Level وProperty-Level وFunction-Level Authorization.
4.  API Rate Limiting.
5.  Replay Attacks وRequest Signing وIdempotency Keys.
6.  Webhook Authentication وحماية API Keys وتدوير المفاتيح.
7.  CORS الصحيح ومنع كشف الحقول الداخلية.
8.  منع Enumeration وPagination Limits وRequest Size Limits.
9.  حماية عمليات البحث والتصدير ومنع استهلاك الموارد المفرط.
10. API Audit Logs.
11. OWASP API Security Top 10.
12. اختبار أمان API باستخدام أدوات اختبار مصرح بها.

### الوحدة 61: Security Testing وHardening

1.  Security Code Review وStatic Analysis.
2.  Dependency Vulnerability Scanning وComposer Audit.
3.  PHPStan وLarastan.
4.  Security Headers وCSP وHTTPS وHSTS وSecure Cookies.
5.  إخفاء معلومات الخادم وحماية لوحات الإدارة.
6.  تقييد الوصول إلى Horizon وTelescope وحماية Debug Mode.
7.  إدارة صلاحيات الخادم وLeast Privilege لقاعدة البيانات.
8.  تدوير Logs ومراقبة تسجيل الدخول المشبوه.
9.  Audit Logging وIncident Response.
10. Backup Security واختبار استعادة النسخ الاحتياطية.
11. Security Regression Tests.
12. قائمة مراجعة أمنية قبل الإطلاق.
13. اختبار اختراق مصرح به للتطبيق.
14. خطة معالجة الثغرات.

## المرحلة الثانية عشرة: الاختبارات وضمان الجودة

### الوحدة 62: أساسيات Testing في Laravel

1.  لماذا نكتب الاختبارات؟ وأنواع الاختبارات البرمجية.
2.  Unit وFeature وIntegration وEnd-to-End Testing.
3.  PHPUnit وPest وإعداد بيئة الاختبار.
4.  phpunit.xml ومجلد tests وكتابة أول اختبار.
5.  Assertions وTest Naming وArrange-Act-Assert.
6.  Test Isolation وDatabase Testing وTest Database.
7.  RefreshDatabase وDatabase Transactions أثناء الاختبار.
8.  Factories وSeeders في الاختبارات.
9.  اختبار Controllers وServices وModels وRoutes.
10. اختبار Validation وExceptions وAuthorization وAuthentication.
11. اختبار File Uploads وMail وNotifications.
12. اختبار Jobs وQueues وEvents وListeners وCache.
13. اختبار API Responses والحالات الحدية Edge Cases.
14. Test Coverage وFlaky Tests.
15. بناء استراتيجية اختبار لمشروع حقيقي.

### الوحدة 63: Testing المتقدم

1.  Mocking وStubbing وPHPUnit Mock Objects وMockery.
2.  Laravel Mocking Helpers وFake Facades.
3.  Http::fake وMail::fake وNotification::fake.
4.  Queue::fake وBus::fake وEvent::fake وStorage::fake.
5.  Cache::shouldReceive وMocking External Services.
6.  Contract Testing وAPI Contract Testing.
7.  Database Integration Tests وTesting Transactions.
8.  Testing Race Conditions وIdempotency.
9.  Testing Queue Retries وFailed Jobs وEvent Ordering.
10. Browser Testing وLaravel Dusk عند الحاجة.
11. اختبارات الواجهة مع Inertia أو React.
12. Accessibility وPerformance وLoad وSecurity Testing.
13. Mutation Testing وTest Data Management.
14. Test Pyramid وتقليل زمن تشغيل الاختبارات.
15. تشغيل الاختبارات بالتوازي.
16. Smoke وRegression Tests.
17. بناء Test Suite لتطبيق مؤسسي.

### الوحدة 64: Code Quality وRefactoring

1.  Clean Code وNaming Conventions.
2.  Code Duplication وCode Smells.
3.  Refactoring Techniques واستخراج Methods وClasses.
4.  تقليل مسؤوليات Controllers وتعقيد الشروط.
5.  Coupling وCohesion.
6.  Type Safety وStrict Types وPHPDoc.
7.  Static Analysis وPHPStan وLarastan.
8.  Laravel Pint وPHP_CodeSniffer وComposer Audit.
9.  Dead Code Detection وComplexity Metrics.
10. Dependency Graphs وArchitectural Tests.
11. منع Circular Dependencies بين Modules.
12. Coding Standards وCode Review.
13. Pull Request Best Practices.
14. Technical Debt Management وBoy Scout Rule.
15. Quality Gates قبل دمج الكود.

## المرحلة الثالثة عشرة: تكامل Laravel مع الأنظمة والخدمات الخارجية

### الوحدة 65: HTTP Client والتكاملات الخارجية

1.  Laravel HTTP Client.
2.  إرسال GET وPOST وPUT وPATCH وDELETE.
3.  Query Parameters وHeaders وAuthentication.
4.  Bearer Tokens وBasic Authentication.
5.  إرسال JSON وMultipart Requests.
6.  رفع الملفات إلى APIs خارجية.
7.  قراءة Responses والتعامل مع Status Codes.
8.  throw() وfailed().
9.  Connection Timeout وRequest Timeout.
10. Retry Policies وExponential Backoff.
11. HTTP Client Middleware وRequest Macros وResponse Macros.
12. منع تسريب API Keys.
13. Rate Limits وPagination من API خارجي.
14. Webhooks وIdempotency.
15. External API Failures وCircuit Breaker Concept.
16. Mocking HTTP Requests.
17. تسجيل الطلبات دون تخزين أسرار.
18. Integration Services.
19. بناء تكامل احترافي مع خدمة خارجية.

### الوحدة 66: Webhooks

1.  مفهوم Webhooks والفرق بينها وبين Polling.
2.  استقبال Webhooks وتصميم Endpoints.
3.  التحقق من التوقيع وHMAC Verification.
4.  التحقق من Timestamp ومنع Replay Attacks.
5.  Idempotency وحفظ الأحداث المستلمة.
6.  معالجة Webhooks عبر Queues والرد السريع على المرسل.
7.  إعادة المحاولة والتعامل مع الأحداث المكررة وترتيب الأحداث.
8.  فشل معالجة الحدث وDead Letter Handling.
9.  Webhook Event Logs وWebhook Subscriptions.
10. إرسال Webhooks من Laravel وتوقيعها.
11. Retry Schedules ومراقبة Delivery Status.
12. تصميم Webhook System قابل للتوسع.

### الوحدة 67: الدفع الإلكتروني

1.  Payment Gateway Integration.
2.  تصميم دورة حياة الدفع.
3.  Payment Intent أو ما يعادله بحسب المزود.
4.  حالات Pending وSucceeded وFailed وRefunded.
5.  Payment Transactions وPayment Idempotency.
6.  Webhooks المالية والتحقق من توقيعات مزود الدفع.
7.  منع تكرار الخصم.
8.  Refunds وPartial Refunds.
9.  العملات وDecimal Precision وتخزين المبالغ بصورة صحيحة.
10. Payment Reconciliation وتسوية العمليات المالية.
11. سجل عمليات الدفع وAudit Trail.
12. فشل الاتصال بمزود الدفع ومعالجة الدفع غير المتزامن.
13. فصل Payment Gateway عن Business Logic.
14. Strategy Pattern لمزودات الدفع.
15. الاشتراكات المتكررة.
16. PCI DSS وما ينبغي عدم تخزينه.
17. اختبار سيناريوهات الدفع.
18. بناء نظام دفع تجريبي آمن.

### الوحدة 68: تكامل خدمات التخزين والبريد والاتصال

1.  Amazon S3 وObject Storage المتوافق مع S3 وGoogle Cloud Storage.
2.  خدمات البريد وSMS Gateways وWhatsApp Business Platform.
3.  OAuth وCRM وERP.
4.  AI APIs وخدمات التحليلات.
5.  WebSocket Providers وخدمات الفوترة وأنظمة إدارة الهوية.
6.  بناء Adapters لكل مزود وتوحيد واجهات التعامل.
7.  التعامل مع تغيرات APIs واختبار Integrations.
8.  إدارة Secrets ومراقبة حالة الخدمات الخارجية.

## المرحلة الرابعة عشرة: Real-Time Applications

### الوحدة 69: Broadcasting وWebSockets

1.  Real-Time Communication.
2.  Polling وLong Polling وWebSockets وSSE.
3.  Laravel Broadcasting وBroadcast Events.
4.  Public وPrivate وPresence Channels.
5.  Channel Authorization وإعداد Broadcasting.
6.  Laravel Reverb وPusher-compatible Services وLaravel Echo.
7.  WebSocket Connections وإرسال Events إلى المتصفح.
8.  Real-Time Notifications وتحديث الواجهة دون Refresh.
9.  Presence وOnline Users وReal-Time Dashboards.
10. انقطاع الاتصال وReconnection Strategies.
11. Authentication للـ WebSockets وحماية القنوات الخاصة.
12. التعامل مع آلاف الاتصالات.
13. توزيع WebSocket Servers وScaling وLoad Balancing.
14. Monitoring WebSocket Connections واختبار Broadcasting.
15. بناء نظام محادثات فوري.

### الوحدة 70: أنظمة المحادثة والتعاون المباشر

1.  تصميم قاعدة بيانات المحادثات.
2.  Users وConversations وMessages.
3.  Direct Messages وGroup Chats.
4.  Message Status وRead Receipts وTyping Indicators.
5.  Online Presence.
6.  Attachments وPrivate Attachments.
7.  Message Pagination والبحث في المحادثات.
8.  الإشعارات الفورية.
9.  إدارة عضوية المجموعات وصلاحيات المشرفين.
10. Message Delivery والتعامل مع الرسائل المكررة.
11. ترتيب الرسائل وQueue Processing وReal-Time Broadcasting.
12. حفظ الرسائل وإدارة أرشفتها.
13. Content Moderation وRate Limiting للرسائل.
14. تصميم Chat API واختبار النظام تحت الضغط.

## المرحلة الخامسة عشرة: Laravel مع React وInertia

### الوحدة 71: Laravel وInertia.js

1.  ما هو Inertia.js؟
2.  Traditional MVC مقابل SPA.
3.  Inertia مقابل REST API منفصل.
4.  متى تختار Inertia؟
5.  تثبيت Inertia مع Laravel.
6.  إعداد React أو Vue مع Inertia.
7.  Inertia Pages وتمرير Props من Laravel.
8.  Shared Data وPersistent Layouts.
9.  Forms وValidation Errors وRedirects وFlash Messages.
10. Partial Reloads وDeferred Props وLazy Props.
11. Infinite Scroll وRemembered State.
12. History وNavigation وFile Uploads.
13. Authentication مع Inertia.
14. Authorization في الواجهة والخادم.
15. حماية البيانات التي يرسلها الخادم.
16. تحسين أداء Pages وSSR عند الحاجة.
17. Code Splitting وإدارة الأصول باستخدام Vite.
18. بناء لوحة تحكم احترافية باستخدام Inertia.

### الوحدة 72: Laravel مع React

1.  بنية React مع Laravel وفصل الواجهة عن Backend.
2.  إنشاء React Application باستخدام Vite.
3.  تنظيم المكونات وReact Router.
4.  Redux Toolkit وRTK Query.
5.  إدارة حالة المستخدم وAPI Client.
6.  API Authentication باستخدام Sanctum.
7.  CORS وCSRF وإدارة Tokens والجلسات.
8.  Forms وValidation ورفع الملفات.
9.  Pagination وFiltering وError Handling وLoading States.
10. Cache للبيانات في الواجهة.
11. Protected Routes وRole-Based UI.
12. Real-Time Updates.
13. بناء Admin Dashboard.
14. فصل عقود API عن تفاصيل الواجهة.
15. نشر React وLaravel بصورة مستقلة.
16. مراقبة أخطاء الواجهة والخادم.

### الوحدة 73: Livewire وFilament كخيارات ضمن منظومة Laravel

1.  Server-Driven UI.
2.  مقدمة إلى Livewire ومتى يناسب.
3.  دورة حياة Livewire Components.
4.  Forms وValidation وPagination وEvents.
5.  Security في Livewire وFile Uploads وTesting.
6.  مقدمة إلى Filament.
7.  بناء Resource وCRUD باستخدام Filament.
8.  Forms وTables وFilters وActions.
9.  إدارة المستخدمين وRoles وPermissions.
10. Custom Pages وWidgets.
11. بناء لوحة إدارة سريعة وتخصيص الواجهة.
12. متى تستخدم Filament بدل بناء لوحة مخصصة؟
13. مقارنة Filament وInertia وReact.
14. اختيار الأدوات وفقًا لمتطلبات المشروع.

## المرحلة السادسة عشرة: بناء الأنظمة الكبيرة ومتعددة المؤسسات

### الوحدة 74: Modular Monolith

1.  مفهوم Modular Monolith.
2.  Monolith مقابل Microservices.
3.  تقسيم النظام إلى Modules وتحديد حدود الوحدات.
4.  فصل المسؤوليات.
5.  تنظيم Models وServices وRoutes وMigrations داخل Modules.
6.  تنظيم Events وListeners وModule Providers.
7.  التواصل بين الوحدات.
8.  منع Circular Dependencies.
9.  مشاركة الكود المشترك وتحديد ملكية البيانات.
10. اختبار الوحدات وتوثيق حدود Modules.
11. Versioning للوحدات الداخلية.
12. استخراج Module إلى خدمة مستقلة عند الحاجة.
13. بناء تطبيق مؤسسي باستخدام Modular Monolith.

### الوحدة 75: Multi-Tenancy

1.  مفهوم Multi-Tenancy وSingle-Tenant مقابل Multi-Tenant.
2.  Shared Database وShared Schema.
3.  Database per Tenant وSchema per Tenant.
4.  اختيار استراتيجية العزل.
5.  Tenant Identification.
6.  Subdomain-Based Tenancy وCustom Domain Tenancy.
7.  Tenant Middleware وTenant Context.
8.  Tenant-Aware Models.
9.  Global Scopes للعزل ومنع تسرب البيانات بين المؤسسات.
10. Tenant-Aware Cache وQueues وStorage وNotifications.
11. Tenant-Aware Database Connections.
12. إدارة مستخدمين مشتركين بين المؤسسات.
13. عضويات المستخدم في المؤسسات.
14. الأدوار والصلاحيات لكل مؤسسة.
15. اشتراكات المؤسسات وLimits حسب الباقة.
16. Provisioning للمؤسسات الجديدة.
17. Tenant Migration Strategy.
18. Backup وRestore لكل مؤسسة.
19. اختبار عزل البيانات.
20. مراقبة استهلاك الموارد لكل Tenant.
21. بناء SaaS Multi-Tenant.

### الوحدة 76: إدارة المستخدمين والمؤسسات المتقدمة

1.  تصميم نظام Organizations.
2.  Organizations وTeams وDepartments.
3.  المستخدمون والعضويات.
4.  الأدوار على مستوى المؤسسة.
5.  الصلاحيات على مستوى الفريق.
6.  دعوات المستخدمين وقبول الدعوات وانتهاء صلاحيتها.
7.  تسجيل دخول موحد للمؤسسة.
8.  إدارة الحسابات المتعددة وتبديل السياق بين المؤسسات.
9.  Audit Logs.
10. سياسات الاحتفاظ بالبيانات وأرشفة الحسابات.
11. حذف الحساب والبيانات.
12. Export بيانات المؤسسة.
13. Limits للموارد وBilling Integration وUsage Tracking.
14. بناء نظام مؤسسات قابل للتوسع.

### الوحدة 77: Subscription وSaaS Billing

1.  SaaS Business Model.
2.  Plans وFeatures.
3.  Subscription Lifecycle.
4.  Free Trial.
5.  الاشتراكات الشهرية والسنوية وتجديد الاشتراك.
6.  Grace Periods.
7.  Upgrade وDowngrade وProration.
8.  Cancel وResume.
9.  Failed Payments وDunning Strategies.
10. Webhook Processing.
11. Idempotent Billing Operations.
12. Usage-Based Billing وMetered Features.
13. Quotas وUsage Limits.
14. Coupons وDiscounts.
15. Invoices وTaxes.
16. Payment Reconciliation.
17. Billing Audit Logs.
18. التعامل مع اختلاف العملة.
19. اختبارات دورة الاشتراك.
20. بناء نظام SaaS Billing متكامل.

## المرحلة السابعة عشرة: قواعد البيانات على مستوى الخبير

### الوحدة 78: تصميم قواعد البيانات المتقدمة

1.  Database Design Principles وتحليل متطلبات البيانات.
2.  ER Diagrams.
3.  Logical وPhysical Data Modeling.
4.  Normalization من 1NF إلى 5NF.
5.  Denormalization.
6.  Constraints وReferential Integrity.
7.  Primary Keys وAuto-Increment مقابل UUID وULID.
8.  Composite Keys.
9.  Index Design وCovering Indexes.
10. Composite Index Column Order.
11. Selectivity وCardinality وIndex Maintenance.
12. Query Plans وJoin Algorithms.
13. Subquery Optimization.
14. Pagination على نطاق واسع.
15. Transaction Isolation Levels.
16. Dirty Reads وNon-Repeatable Reads وPhantom Reads.
17. Deadlocks وLocking Strategies.
18. Optimistic وPessimistic Concurrency.
19. Database Contention.
20. Read Replicas وReplication Lag.
21. Read/Write Splitting وConnection Pooling.
22. Database وTable Partitioning.
23. Sharding وShard Key Selection.
24. التعامل مع ملايين ومليارات السجلات.
25. أرشفة البيانات القديمة.
26. تصميم قاعدة بيانات للتحليلات.
27. فصل OLTP عن OLAP.
28. Database Capacity Planning.

### الوحدة 79: Transactions وConcurrency في Laravel

1.  Transactions في Eloquent وQuery Builder.
2.  DB::transaction().
3.  Nested Transactions وSavepoints.
4.  Transaction Isolation.
5.  lockForUpdate وsharedLock.
6.  التعامل مع التحديثات المتزامنة وLost Updates.
7.  Race Conditions وIdempotency.
8.  Unique Constraints كخط دفاع أخير.
9.  Distributed Locks وRedis Locks.
10. منع الخصم المكرر من الرصيد.
11. منع الحجز المزدوج.
12. تنفيذ العمليات المالية داخل Transactions.
13. حدود Transaction عند استخدام الخدمات الخارجية.
14. Transactional Outbox Pattern.
15. التعامل مع الفشل الجزئي.
16. Retry بعد Deadlock.
17. تصميم عمليات آمنة تحت الضغط.
18. اختبار Concurrency.

### الوحدة 80: البحث المتقدم والتحليلات

1.  البحث باستخدام SQL وFull-Text Indexes.
2.  البحث العربي وNormalization للنصوص العربية عند الحاجة.
3.  Tokenization وRanking وRelevance.
4.  Laravel Scout.
5.  Database Search Engines.
6.  Meilisearch.
7.  Elasticsearch وOpenSearch.
8.  متى تحتاج إلى Search Engine مستقل؟
9.  Indexing Documents وتحديث الفهارس وحذف السجلات.
10. معالجة الفهرسة عبر Queues.
11. Eventual Consistency.
12. Faceted Search وFilters وAggregations.
13. Autocomplete والبحث في ملايين السجلات.
14. بناء لوحات إحصائية.
15. تجميع البيانات زمنيًا وPrecomputed Aggregates.
16. Materialized Views حيث يدعمها المحرك.
17. Data Warehousing Basics.
18. فصل الاستعلامات التحليلية عن معاملات التطبيق.
19. بناء نظام تقارير كبير.

## المرحلة الثامنة عشرة: أوامر Artisan وتطوير أدوات المطورين

### الوحدة 81: Artisan Commands

1.  مفهوم Artisan واستعراض الأوامر المتاحة.
2.  إنشاء Command وSignature وDescription.
3.  Arguments وOptions.
4.  Input وOutput وConsole Questions.
5.  Progress Bars وTables داخل Terminal.
6.  Confirmation Prompts وExit Codes.
7.  كتابة أوامر قابلة للاختبار.
8.  Commands لمعالجة البيانات والاستيراد والتصدير.
9.  Commands لصيانة النظام وإدارة المستخدمين والاشتراكات.
10. التعامل مع Exceptions وLogging داخل Commands.
11. تنفيذ Commands داخل Scheduler.
12. استدعاء Commands من Commands أخرى.
13. Command Bus Concept.
14. التعامل مع الأوامر الطويلة.
15. تصميم CLI Tools احترافية.

### الوحدة 82: إنشاء Laravel Packages

1.  Composer Packages والفرق بين Package وModule.
2.  إنشاء Package وتنظيم src وtests وconfig.
3.  Composer Autoloading.
4.  Service Provider وPackage Discovery.
5.  نشر Config Files وMigrations.
6.  Routes وViews وTranslations داخل Package.
7.  Commands وEvents وListeners داخل Package.
8.  Facades الخاصة بالحزمة.
9.  Testing وTestbench عند الحاجة.
10. Semantic Versioning وDependency Constraints.
11. Backward Compatibility.
12. Documentation وPublishing على Packagist.
13. Private Composer Repositories.
14. إدارة الحزم الداخلية في المؤسسة.
15. صيانة الحزم وتحديثها.

### الوحدة 83: Debugging وDeveloper Experience

1.  قراءة Stack Traces واستخدام Laravel Logs.
2.  Laravel Tinker.
3.  Laravel Debugbar في بيئة التطوير.
4.  Laravel Telescope وLaravel Pulse.
5.  Laravel Nightwatch أو أدوات المراقبة المتوافقة عند الحاجة.
6.  Debugging في VS Code وPhpStorm.
7.  Xdebug وProfiling.
8.  SQL Query Logging وHTTP Request Inspection.
9.  Queue وEvent وCache Debugging.
10. Memory Profiling واكتشاف تسرب الذاكرة.
11. Debugging Production Safely.
12. Redaction للبيانات الحساسة.
13. Local Development Environment وDocker Development Environment.
14. توحيد بيئة الفريق وإعداد Scripts للمشروع.
15. تحسين سرعة دورة التطوير.

## المرحلة التاسعة عشرة: DevOps ونشر Laravel في بيئة Production

### الوحدة 84: Linux للمطور المحترف

1.  أساسيات Linux ونظام الملفات والصلاحيات.
2.  المستخدمون والمجموعات وchmod وchown.
3.  إدارة العمليات.
4.  CPU وMemory وDisk Monitoring.
5.  إدارة الخدمات باستخدام systemd.
6.  SSH وإدارة المفاتيح.
7.  إدارة متغيرات البيئة.
8.  أساسيات Bash Scripting.
9.  إدارة Logs وCron.
10. إدارة مساحة القرص.
11. Firewall Basics وTLS Certificates وDNS.
12. تشخيص مشكلات الشبكة.
13. استخدام curl وdig وss.
14. إدارة الأسرار على الخادم.
15. Hardening لخادم Linux.

### الوحدة 85: إعداد خادم Laravel

1.  متطلبات تشغيل Laravel في Production.
2.  اختيار إصدار PHP المناسب وإعداد PHP Extensions.
3.  Composer في Production.
4.  PHP-FPM وNginx وApache وLiteSpeed عند استخدامه.
5.  Document Root الصحيح وتوجيه الموقع إلى public.
6.  صلاحيات storage وbootstrap/cache.
7.  Environment Variables وDatabase Connection.
8.  إعداد Redis وQueue Workers وScheduler.
9.  Supervisor أو systemd.
10. HTTPS وDNS وReverse Proxy وTrusted Proxies.
11. Firewall وLogs.
12. إدارة عمليات PHP وحدود الذاكرة.
13. التعامل مع أخطاء 500 و502 و504.
14. تشخيص مشاكل صلاحيات الملفات.
15. اختبار التطبيق قبل الإطلاق وإعداد Production آمنة.

### الوحدة 86: Docker وLaravel

1.  Containers وImages وDockerfile وDocker Compose.
2.  بناء Image لـ Laravel.
3.  PHP-FPM وNginx وMySQL وRedis Containers.
4.  فصل الخدمات.
5.  Persistent Volumes وNetwork Configuration.
6.  Environment Variables وDocker Secrets.
7.  Health Checks.
8.  Multi-Stage Builds وImage Optimization.
9.  تشغيل Composer أثناء البناء.
10. إدارة Permissions داخل Container.
11. تشغيل Queue Workers وScheduler داخل Containers.
12. إدارة Logs.
13. File Uploads وObject Storage.
14. Docker Development وProduction.
15. Docker Security وContainer Resource Limits.
16. بناء Docker Compose متكامل.
17. نشر Laravel باستخدام Docker.
18. تشغيل Laravel على Coolify أو منصة مشابهة.
19. إدارة Migrations أثناء النشر.
20. تحديث Containers دون فقدان البيانات.

### الوحدة 87: CI/CD باستخدام GitHub Actions

1.  CI/CD وGit Workflows وBranching Strategies.
2.  Pull Requests وGitHub Actions.
3.  Workflow YAML وTriggers وJobs وSteps وRunners.
4.  تثبيت PHP في CI وComposer Install.
5.  Dependency Caching.
6.  تشغيل Laravel Pint وPHPStan أو Larastan.
7.  تشغيل PHPUnit أو Pest.
8.  اختبار Database Migrations.
9.  Security Scanning وComposer Audit.
10. بناء Frontend Assets وDocker Image.
11. نشر Artifact.
12. إعداد Secrets وDeployment Environments وموافقات النشر.
13. Deployment على VPS باستخدام SSH.
14. نشر Docker Images.
15. Rollback Strategy وSmoke Tests.
16. Database Migration Strategy.
17. Zero-Downtime Deployment.
18. مراقبة نتيجة النشر.
19. بناء Pipeline احترافي.

### الوحدة 88: استراتيجية النشر المتقدم

1.  Release Management.
2.  Immutable وAtomic Deployments.
3.  Symlink-Based Deployments.
4.  Rolling Deployments.
5.  Blue-Green Deployments.
6.  Canary Releases.
7.  Zero-Downtime Deployments.
8.  Database Expand-and-Contract.
9.  Backward-Compatible Migrations.
10. Queue Worker Restarts وScheduler Coordination.
11. Cache Warmup وAsset Versioning.
12. CDN Cache Invalidation.
13. Health Checks وReadiness وLiveness Probes.
14. Rollback Application Code.
15. التعامل مع Migrations غير القابلة للتراجع.
16. Feature Flags.
17. Deployment Notifications وDeployment Audit Logs.
18. Release Verification.
19. Disaster Recovery أثناء النشر.

### الوحدة 89: النسخ الاحتياطي والتعافي من الكوارث

1.  Backup Strategy.
2.  Database وFile Storage وConfiguration Backups.
3.  Backup Encryption وRetention.
4.  Offsite Backups وObject Storage.
5.  Incremental وFull Backups.
6.  Point-in-Time Recovery وBinary Logs عند دعمها.
7.  Restore Procedures وRestore Testing.
8.  Recovery Point Objective --- RPO.
9.  Recovery Time Objective --- RTO.
10. Disaster Recovery Plan.
11. النسخ الاحتياطي لقواعد بيانات ضخمة.
12. النسخ الاحتياطي أثناء عمل التطبيق.
13. اتساق البيانات بين قاعدة البيانات والملفات.
14. إدارة النسخ الاحتياطية متعددة المؤسسات.
15. مراقبة نجاح النسخ الاحتياطي وتنبيه فشله.
16. منع حذف النسخ من حساب التطبيق نفسه.
17. إعداد Runbook للتعافي من الكوارث.

## المرحلة العشرون: المراقبة والاستقرار والتوسع

### الوحدة 90: Logging وMonitoring

1.  Laravel Logging وMonolog.
2.  Log Channels: Single وDaily وStack.
3.  Structured Logging.
4.  Correlation IDs وRequest IDs.
5.  Contextual Logging وLog Levels وLog Rotation.
6.  إخفاء البيانات الحساسة من Logs.
7.  Error Tracking.
8.  Laravel Pulse وLaravel Telescope.
9.  OpenTelemetry Basics.
10. Metrics وLogs وTraces.
11. Distributed Tracing وAPM Tools.
12. Prometheus وGrafana Concepts.
13. Health Endpoints.
14. Database وRedis وQueue وExternal Services Health.
15. Error Rate وLatency وThroughput Monitoring.
16. Alerting.
17. SLO وSLI وSLA.
18. بناء لوحة مراقبة للتطبيق.

### الوحدة 91: High Availability وScalability

1.  Availability.
2.  Vertical Scaling وHorizontal Scaling.
3.  Stateless Application Design.
4.  Load Balancers وMultiple Application Servers.
5.  Shared Sessions وShared Cache وShared File Storage.
6.  Centralized Logging.
7.  Database Replication وRead Replicas.
8.  Queue Scaling.
9.  Redis High Availability وDatabase Failover.
10. Health Checks وGraceful Shutdown.
11. Connection Limits وBackpressure وRate Limiting.
12. Circuit Breakers وBulkheads وRetry Storms.
13. Graceful Degradation وLoad Shedding.
14. Capacity Planning وBottleneck Analysis.
15. Horizontal Scaling لـ Laravel.
16. تصميم نظام يتحمل تعطل خادم.
17. بناء Architecture عالية التوافر.

### الوحدة 92: Microservices مع Laravel

1.  متى تحتاج إلى Microservices؟
2.  متى يكون Modular Monolith أفضل؟
3.  Service Boundaries وBounded Contexts.
4.  API Communication.
5.  Synchronous وAsynchronous Communication.
6.  Message Brokers وRabbitMQ وApache Kafka.
7.  Event-Driven Communication.
8.  Service Discovery وAPI Gateway.
9.  Authentication بين الخدمات وService-to-Service Authorization.
10. Distributed Transactions وSaga Pattern.
11. Transactional Outbox وEventual Consistency.
12. Idempotent Consumers.
13. Distributed Tracing وCentralized Logging.
14. Versioning بين الخدمات.
15. Failure Isolation وRetry وCircuit Breaker.
16. Service Deployment وContract Testing.
17. Data Ownership.
18. تجنب Distributed Monolith.
19. تصميم نظام خدمات متعددة باستخدام Laravel.

## المرحلة الحادية والعشرون: Laravel المتخصص حسب نوع المشروع

### الوحدة 93: بناء أنظمة التجارة الإلكترونية

1.  تصميم المنتجات والتصنيفات.
2.  المنتجات ذات المتغيرات Variants.
3.  إدارة المخزون.
4.  السلة Cart.
5.  قوائم الرغبات.
6.  إدارة الأسعار والخصومات.
7.  Coupons.
8.  Checkout Workflow.
9.  الطلبات Order Management.
10. Order State Machine.
11. Payment Integration.
12. Refunds.
13. الشحن والتوصيل.
14. الضرائب.
15. الفواتير.
16. Inventory Transactions.
17. منع بيع المخزون مرتين.
18. Concurrency أثناء الشراء.
19. الإشعارات.
20. البحث والتصفية.
21. تقارير المبيعات.
22. إدارة الموردين.
23. Multi-Vendor Marketplace.
24. Commission Calculation.
25. Refund and Dispute Workflows.
26. حماية العمليات المالية.
27. بناء متجر إلكتروني متكامل.

### الوحدة 94: بناء أنظمة التعليم الإلكتروني LMS

1.  تصميم المؤسسات التعليمية.
2.  إدارة المدرسين والطلاب.
3.  إدارة الدورات.
4.  إدارة الوحدات والدروس.
5.  إدارة الفيديوهات والملفات.
6.  تسجيل الطلاب في الدورات.
7.  تتبع تقدم الطالب.
8.  تسجيل الحضور.
9.  الاختبارات والواجبات.
10. Question Banks.
11. أنواع الأسئلة.
12. تصحيح الاختبارات.
13. حساب الدرجات.
14. الشهادات.
15. الاشتراكات والمدفوعات.
16. إدارة المجموعات والدفعات.
17. الإشعارات.
18. نظام التعليقات والمناقشات.
19. تقارير الأداء التعليمي.
20. حماية محتوى الدورات.
21. تكامل Video Streaming.
22. تكامل SCORM أو xAPI عند الحاجة.
23. بناء API لتطبيق موبايل.
24. معالجة التقارير الثقيلة عبر Queues.
25. بناء LMS متعدد المؤسسات.

### الوحدة 95: بناء أنظمة ERP وCRM

1.  تحليل نطاق النظام.
2.  إدارة العملاء.
3.  إدارة جهات الاتصال.
4.  إدارة فرص المبيعات.
5.  إدارة الموظفين.
6.  إدارة الأقسام.
7.  إدارة المهام.
8.  إدارة المشاريع.
9.  إدارة الموردين.
10. إدارة المشتريات.
11. إدارة المخزون.
12. إدارة الفواتير.
13. إدارة المصروفات.
14. إدارة الموافقات.
15. Workflows.
16. Audit Logs.
17. تقارير الأداء.
18. إدارة الصلاحيات المؤسسية.
19. تكامل البريد والتقويم.
20. التكامل مع خدمات خارجية.
21. إدارة البيانات بين الوحدات.
22. تصميم Modular Monolith.
23. بناء ERP قابل للتوسع.

### الوحدة 96: بناء أنظمة الحجز والمواعيد

1.  تصميم الموارد القابلة للحجز.
2.  إدارة المواعيد.
3.  تحديد ساعات العمل.
4.  إدارة المناطق الزمنية.
5.  منع تضارب الحجوزات.
6.  Concurrency Control.
7.  Locking أثناء الحجز.
8.  الحجز المؤقت.
9.  انتهاء صلاحية الحجز المؤقت.
10. Cancellation Policies.
11. إعادة الجدولة.
12. قوائم الانتظار.
13. الإشعارات والتذكيرات.
14. الدفع المسبق.
15. استرداد المدفوعات.
16. Recurring Appointments.
17. إدارة الموظفين والموارد.
18. Availability Search.
19. Calendar Integrations.
20. تقارير الإشغال.
21. اختبارات التزامن.
22. بناء نظام حجوزات متعدد الفروع.

### الوحدة 97: بناء أنظمة الملفات والوسائط

1.  إدارة المستندات.
2.  تنظيم الملفات والمجلدات.
3.  صلاحيات الوصول.
4.  مشاركة الملفات.
5.  Signed URLs.
6.  File Versioning.
7.  Metadata Extraction.
8.  Image Processing.
9.  Video Processing.
10. Document Preview.
11. OCR Integration.
12. Search Indexing.
13. Large File Uploads.
14. Chunked Uploads.
15. Multipart Uploads إلى Object Storage.
16. Deduplication.
17. Hash Verification.
18. Antivirus Scanning.
19. Retention Policies.
20. أرشفة الملفات.
21. معالجة الوسائط عبر Queues.
22. بناء Document Management System.

### الوحدة 98: الذكاء الاصطناعي مع Laravel

1.  أساسيات تكامل AI APIs.
2.  إدارة API Keys.
3.  تصميم AI Service Layer.
4.  استخدام نماذج اللغة الكبيرة LLMs.
5.  إرسال الرسائل واستقبال النتائج.
6.  Streaming Responses.
7.  Structured Outputs.
8.  JSON Schema.
9.  Tool Calling.
10. Function Calling.
11. التعامل مع Context Windows.
12. Token Usage وCost Tracking.
13. Rate Limits.
14. Retry وTimeout.
15. AI Jobs باستخدام Queues.
16. حفظ المحادثات.
17. Conversation Context.
18. Prompt Versioning.
19. Prompt Injection.
20. حماية البيانات عند إرسالها إلى النماذج.
21. Retrieval-Augmented Generation --- RAG.
22. Embeddings.
23. Vector Databases.
24. Semantic Search.
25. Document Ingestion.
26. Chunking Strategies.
27. Retrieval Evaluation.
28. AI Guardrails.
29. Human-in-the-Loop.
30. AI Observability.
31. تقييم جودة المخرجات.
32. إدارة التكلفة والاستهلاك.
33. بناء Chatbot.
34. بناء مساعد يعتمد على مستندات المؤسسة.
35. بناء نظام تحليل تقارير باستخدام الذكاء الاصطناعي.

### الوحدة 99: الأنظمة المتكاملة وIoT وSCADA

1.  استقبال البيانات من أجهزة خارجية.
2.  تصميم Ingestion API.
3.  استقبال Telemetry.
4.  WebSockets وMQTT Integration.
5.  تكامل أنظمة SCADA عبر واجهاتها الموثقة.
6.  تكامل OPC UA عبر وسيط أو مكتبة مناسبة.
7.  تصميم جداول Time-Series.
8.  تخزين القراءات التاريخية.
9.  معالجة بيانات ضخمة عبر Queues.
10. Batch Processing.
11. Stream Processing Concepts.
12. التعامل مع البيانات المكررة.
13. Data Validation.
14. Timestamp Normalization.
15. Data Retention.
16. تجميع القراءات زمنيًا.
17. بناء Dashboards.
18. التنبيهات عند تجاوز Thresholds.
19. تقارير الأداء.
20. تكامل أنظمة التحليل.
21. الفصل بين نظام الأعمال وشبكات التحكم.
22. حماية بيانات التشغيل.
23. التعامل مع انقطاع الاتصال.
24. تصميم نظام مراقبة وتحليلات صناعية.

## المرحلة الثانية والعشرون: الموضوعات الدقيقة التي تميز الخبير

### الوحدة 100: فهم Laravel Internals

1.  كيف يعمل Service Container داخليًا؟
2.  كيف تعمل Facades؟
3.  كيف يعمل Route Dispatcher؟
4.  كيف يعمل Middleware Pipeline؟
5.  كيف يتم حل Dependencies؟
6.  كيف تعمل Service Providers؟
7.  كيف تعمل Eloquent Hydration؟
8.  كيف يعمل Lazy Loading؟
9.  كيف يعمل Eager Loading؟
10. كيف يتم بناء SQL عبر Eloquent؟
11. كيف تعمل Model Events؟
12. كيف يعمل Event Dispatcher؟
13. كيف تعمل Queues؟
14. كيف تتم Serialization للـ Jobs؟
15. كيف تعمل Cache Drivers؟
16. كيف يعمل Session Manager؟
17. كيف تعمل Authentication Guards؟
18. كيف تعمل Policies وGates؟
19. كيف يعمل Blade Compiler؟
20. كيف تعمل Configuration وRoute Caches؟
21. كيف تعمل Exception Handling؟
22. كيف يتم تحميل الحزم؟
23. كيف يعمل Composer Autoloading؟
24. كيف تؤثر PHP Opcache على الأداء؟
25. قراءة أجزاء من مصدر Laravel.
26. تتبع تنفيذ دالة من Facade إلى التنفيذ الحقيقي.
27. استخدام Reflection عند الحاجة.
28. كتابة تطبيقات تجريبية لفهم Framework Internals.

### الوحدة 101: التوافق بين إصدارات Laravel وPHP

1.  فهم Laravel Release Cycle.
2.  الإصدارات الرئيسية والفرعية والتصحيحية.
3.  Laravel Support Policy.
4.  PHP Compatibility.
5.  Composer Constraints.
6.  قراءة Release Notes.
7.  Deprecation Notices.
8.  Breaking Changes.
9.  تحديث Laravel Major Versions.
10. تحديث Dependencies.
11. فحص الحزم غير المتوافقة.
12. اختبار التوافق.
13. ترحيل الإعدادات القديمة.
14. ترحيل Authentication وRouting عند تغيرهما.
15. التعامل مع APIs التي تغيرت بين الإصدارات.
16. اختبار التطبيق بعد الترقية.
17. خطة Rollback.
18. تحديث PHP دون تعطيل التطبيق.
19. Upgrade Guides.
20. إدارة دورة حياة التطبيق على المدى الطويل.

### الوحدة 102: PHP المتقدم الذي يحتاجه خبير Laravel

1.  PHP Runtime Model.
2.  Zend Engine بصورة مفاهيمية.
3.  Memory Management.
4.  Garbage Collection.
5.  Copy-on-Write.
6.  Object References.
7.  PHP-FPM Process Model.
8.  Opcache.
9.  Composer Autoload Optimization.
10. PHP Attributes.
11. Reflection API.
12. Generators.
13. Iterators.
14. Fibers.
15. Asynchronous Programming Concepts.
16. Type System.
17. Generics عبر Static Analysis وPHPDoc.
18. Enums.
19. Readonly Properties وClasses بحسب إصدار PHP.
20. First-Class Callables.
21. Exception Hierarchies.
22. Error Handling.
23. Streams.
24. Memory-Efficient Processing.
25. Profiling PHP.
26. كتابة Extensions أو FFI عند الحاجة المتخصصة.
27. الفرق بين PHP-FPM وLong-Running Workers.
28. تشخيص مشاكل الأداء على مستوى PHP.

### الوحدة 103: الأداء على مستوى قاعدة البيانات والخادم

1.  قراءة Query Execution Plans.
2.  تحليل Slow Query Logs.
3.  اختيار Indexes وفقًا للاستعلامات.
4.  Query Cardinality.
5.  Lock Contention.
6.  Connection Saturation.
7.  Database Buffer Pools.
8.  Database Memory Management.
9.  Disk I/O.
10. Network Latency.
11. CPU Profiling.
12. Memory Profiling.
13. Load Testing.
14. Stress Testing.
15. Spike Testing.
16. Soak Testing.
17. تحديد نقطة الانهيار.
18. قياس P50 وP95 وP99.
19. Throughput مقابل Latency.
20. Capacity Planning.
21. Horizontal Scaling.
22. Resource Limits.
23. Queue Backpressure.
24. تحسين الخدمات الخارجية.
25. تحليل الأداء End-to-End.
26. إعداد تقرير Performance Investigation.
27. معالجة Bottlenecks بالترتيب الصحيح.

### الوحدة 104: Reliability Engineering

1.  مبادئ Reliability Engineering.
2.  Availability وDurability.
3.  Failure Modes.
4.  Failure Mode and Effects Analysis.
5.  Timeouts.
6.  Retries.
7.  Exponential Backoff.
8.  Jitter.
9.  Circuit Breakers.
10. Bulkheads.
11. Rate Limiting.
12. Backpressure.
13. Graceful Degradation.
14. Idempotency.
15. Distributed Locks.
16. Outbox Pattern.
17. Sagas.
18. Compensating Transactions.
19. Health Checks.
20. Graceful Shutdown.
21. Disaster Recovery.
22. Chaos Engineering Concepts.
23. Incident Management.
24. Postmortems.
25. SLO وError Budgets.
26. بناء تطبيق يتحمل الفشل الجزئي.

### الوحدة 105: Code Review والقيادة التقنية

1.  مراجعة الكود.
2.  مراجعة تصميم قواعد البيانات.
3.  مراجعة الأمان.
4.  مراجعة الأداء.
5.  مراجعة قابلية الاختبار.
6.  مراجعة API Contracts.
7.  مراجعة Migrations.
8.  مراجعة Dependencies.
9.  كتابة Pull Requests واضحة.
10. كتابة Technical Specifications.
11. Architecture Decision Records.
12. تقدير التعقيد والمخاطر.
13. تخطيط Refactoring.
14. إدارة Technical Debt.
15. وضع Coding Standards للفريق.
16. توحيد أدوات التنسيق والتحليل.
17. بناء CI Quality Gates.
18. مراجعة الحزم الخارجية.
19. إدارة التغييرات الكبيرة.
20. كتابة Runbooks.
21. إدارة الحوادث التقنية.
22. اتخاذ القرارات المعمارية.
23. قيادة فريق Backend.
24. تصميم خطة تقنية طويلة المدى.

## المرحلة الثالثة والعشرون: المشاريع العملية التي تثبت إتقان Laravel

### المشروع 1: نظام إدارة المهام --- مستوى مبتدئ

-   CRUD، Routing، Controllers، Blade، Validation، Eloquent، العلاقات،
    Authentication، Pagination.

### المشروع 2: نظام إدارة المستخدمين والصلاحيات --- مستوى متوسط

-   Roles وPermissions، Policies، Audit Logs، إدارة الجلسات، API،
    الاختبارات الأمنية.

### المشروع 3: منصة API متكاملة --- مستوى متوسط إلى متقدم

-   Sanctum، API Resources، Versioning، Rate Limiting، توثيق OpenAPI،
    اختبارات Contract.

### المشروع 4: منصة تعليم إلكتروني LMS --- مستوى متقدم

-   الدورات، الدروس، الاختبارات، تقدم الطلاب، الفيديوهات، الإشعارات،
    الصلاحيات، التقارير.

### المشروع 5: متجر إلكتروني احترافي --- مستوى متقدم

-   المخزون، الطلبات، الدفع، الاسترداد، Webhooks، Concurrency، Queues،
    الاختبارات.

### المشروع 6: منصة SaaS متعددة المؤسسات --- مستوى خبير

-   Multi-Tenancy، عزل البيانات، الاشتراكات، الفوترة، Usage Limits،
    Audit Logs، Billing Webhooks.

### المشروع 7: نظام مؤسسي عالي الأداء --- مستوى خبير متقدم

-   Modular Monolith، Redis، Queues، Read Replicas، Observability،
    CI/CD، Docker، Load Testing، Disaster Recovery.

### المشروع 8: منصة ذكاء اصطناعي متكاملة --- مشروع تخصصي

-   LLM APIs، RAG، Vector Search، Streaming، Queues، إدارة التكلفة،
    حماية البيانات، تقييم جودة المخرجات.

## المرحلة الرابعة والعشرون: معايير اجتياز مستوى الخبير

### الكفاءة 1: البرمجة والتصميم

-   كتابة كود PHP حديث وآمن وقابل للصيانة.
-   تطبيق OOP وSOLID عند الحاجة دون إفراط في التجريد.
-   فهم Laravel Internals وتتبع تنفيذ الكود.

### الكفاءة 2: قواعد البيانات والأداء

-   تصميم مخططات بيانات وعلاقات وفهارس مناسبة.
-   تشخيص N+1 والاستعلامات البطيئة وDeadlocks.
-   معالجة بيانات ضخمة دون استهلاك ذاكرة غير ضروري.

### الكفاءة 3: الأمان

-   تطبيق Authentication وAuthorization بصورة صحيحة.
-   حماية APIs والملفات والمدفوعات والبيانات الحساسة.
-   تنفيذ مراجعة أمنية واختبارات للثغرات الشائعة.

### الكفاءة 4: هندسة الأنظمة

-   الاختيار بين MVC وModular Monolith وMicroservices وفق الحاجة.
-   تصميم Queues وCaching وTransactions وIntegrations موثوقة.
-   تحليل مخاطر التصميم والتوسع والتعقيد.

### الكفاءة 5: الاختبارات والجودة

-   كتابة Unit وFeature وIntegration Tests.
-   استخدام Static Analysis وCode Review وCI.
-   إثبات صحة التغييرات دون كسر الوظائف السابقة.

### الكفاءة 6: النشر والتشغيل

-   نشر تطبيق باستخدام Linux وDocker وCI/CD.
-   مراقبة الأداء والأخطاء والموارد.
-   اختبار النسخ الاحتياطية والاستعادة والتعافي من الأعطال.

## منهجية إعداد كل درس

1.  تعريف المفهوم والهدف منه.
2.  شرح آلية العمل داخليًا.
3.  شرح الاستخدام في Laravel.
4.  أمثلة عملية متدرجة.
5.  شرح الكود سطرًا بسطر عند الحاجة.
6.  الأخطاء الشائعة وأسبابها.
7.  أفضل الممارسات.
8.  اعتبارات الأمان.
9.  اعتبارات الأداء.
10. متى نستخدم التقنية ومتى نتجنبها؟
11. تمرين تطبيقي.
12. أسئلة تقييم.
13. مهمة عملية مرتبطة بمشروع.
14. مراجع التوثيق الرسمي.

## توزيع المستويات التعليمية

  -----------------------------------------------------------------------
  المستوى                 المحتوى                 معيار الانتقال
  ----------------------- ----------------------- -----------------------
  الأول: التأسيس          PHP، OOP، SQL، أساسيات  بناء تطبيق CRUD متكامل
                          Laravel                 

  الثاني: المطور المحترف  Eloquent، APIs، Auth،   بناء تطبيق آمن ومختبر
                          Validation، Testing     

  الثالث: المتقدم         Architecture، Queues،   بناء نظام متكامل قابل
                          Redis، Security،        للصيانة
                          Performance             

  الرابع: الخبير          Internals، Scaling،     تصميم ونشر نظام إنتاجي
                          DevOps، Reliability،    وتحليل مشكلاته
                          Distributed Systems     
  -----------------------------------------------------------------------

## ملاحظات تنظيمية

-   اعتمد إصدار Laravel حديثًا ومستقرًا، وثبّت إصدارات PHP وLaravel والحزم
    في بداية الدورة.
-   لا تخلط أمثلة الإصدارات القديمة بالحديثة دون توضيح.
-   اعتمد توثيق Laravel وPHP وComposer وقواعد البيانات مرجعًا أساسيًا.
-   اربط الأمان والأداء والاختبارات بالمشاريع منذ البداية.
-   لا تطبق Design Patterns أو Architecture معقدة دون حاجة حقيقية.
-   أضف وحدات تخصصية حسب نوع الأنظمة التي سيعمل عليها الطالب.
