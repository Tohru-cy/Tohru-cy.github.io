document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button[data-character]');
    const sanrioMainLink = document.getElementById('sanrio-main-link');
    const sanrioGalleryLink = document.getElementById('sanrio-gallery-link');
    const allButtons = document.querySelectorAll('.nav-button');
    const wikiContainer = document.getElementById('wiki-container');

    const mainInfoContent = document.getElementById('main-info-content');
    const detailedInfoContent = document.getElementById('detailed-info-content');
    const detailImage = document.getElementById('detail-image');
    const infoTitle = document.getElementById('info-title');
    const detailImageLabel = document.getElementById('detail-image-label');
    
    const leftColumn = document.getElementById('left-column');
    const middleColumn = document.getElementById('middle-column');
    const rightColumn = document.getElementById('right-column');

    const charactersData = {
        mymelody: {
            fullName: "My Melody", infoTitle: "FULL PROFILE",
            hotspot: { top: 71.5, left: 33.5 }, 
            main: `<p><strong>My Melody</strong> (マイメロディ) is a sweet, honest little rabbit who resides in the forest of Mariland. She was introduced in 1975 and is easily recognized by her iconic <strong>pink or red hood</strong> which was originally given to her by her mother.</p>
                <p>Her personality is generally <strong>good-natured, cheerful, and caring</strong>, and she has a strong passion for baking. She often enjoys a playful, albeit one-sided, rivalry with her classmate Kuromi, whom she sees as a friend, often missing the true intent of Kuromi's mischief. My Melody remains unfazed by Kuromi's attempts to outdo her, continuing to treat everyone with genuine kindness.</p>
                <p>My Melody is skilled at making almond pound cake, and her simple, friendly demeanor has made her one of Sanrio's most enduring and popular characters globally, often symbolizing simplicity and innocence. She loves spending time in the lush, green environment of Mariland, particularly near the flower fields.</p>
                <p>She is five apples tall and often participates in local events in Mariland, always offering a helping hand and a warm smile.</p>`,
            detailed: `<ul><li><strong>Name:</strong> My Melody (マイメロディ)</li><li><strong>Birthday:</strong> January 18th, 1975 (Debut Year)</li><li><strong>Home:</strong> Mariland Forest</li><li><strong>Favorite Food:</strong> Almond Pound Cake</li><li><strong>Rival:</strong> Kuromi</li></ul>`,
            icon: 'IMG/mymelody-icon.jpg', image: 'IMG/mymelody-profile.jpg'
        },
        mysweetpiano: {
            fullName: "My Sweet Piano", infoTitle: "FULL PROFILE",
            hotspot: { top: 72.5, left: 36.25 },
            main: `<p><strong>My Sweet Piano</strong> (マイスウィートピアノ), often just called Piano, is a gentle, incredibly sweet-natured female sheep with soft, voluminous pink wool. She is My Melody's best and most cherished friend, and she lives next door to her in the beautiful, peaceful forest of Mariland. She is very soft-spoken, naturally shy, and possesses a delicate, tender kindness toward everyone she meets.</p>
                <p>Piano is characterized by her dreamy and tender personality, which is often reflected in her favorite pastime: spending time in flower fields. She loves to pick flowers with My Melody, make flower crowns, or simply lie in the grass and enjoy the peaceful scenery. While she does not speak in full human sentences, she communicates through gentle, expressive "baa" sounds that her close friends, especially My Melody, understand perfectly.</p>
                <p>She is known for being slightly timid, especially in new or loud situations, but she is a deeply caring and nurturing friend, always there to offer comfort, a warm hug, and unconditional support. Her gentle presence makes her a beloved figure, symbolizing innocence, serenity, and the quiet, unwavering bond of friendship.</p>`,
            detailed: `<ul><li><strong>Name:</strong> My Sweet Piano (マイスウィートピアノ)</li><li><strong>Birthday:</strong> July 6th</li><li><strong>Species:</strong> Sheep (Female)</li><li><strong>Best Friend:</strong> My Melody</li><li><strong>Home:</strong> Mariland Forest</li><li><strong>Communication Style:</strong> Expressive "Baa" sounds.</li></ul>`,
            icon: 'IMG/mysweetpiano-icon.jpg',
            image: 'IMG/mysweetpiano-profile.jpg'
        },
        kuromi: {
            fullName: "Kuromi", infoTitle: "FULL PROFILE",
            hotspot: { top: 69.5, left: 46.5 },
            main: `<p><strong>Kuromi</strong> (クロミ) is the rebellious, punk-rock-styled white rabbit who is My Melody's <strong>self-proclaimed rival</strong>. Introduced in 2005, she wears a black jester's hat with a distinctive pink skull design. She aims to be cool and tough, but deep down, she is quite sentimental and easily flustered.</p>
                <p>Despite her gothic, tough-girl exterior, she possesses a deeply <strong>girly and soft side</strong>, shown by her love for reading romance novels and enjoying delicious food. She is the self-appointed leader of a biker gang called "Kuromi's 5," which includes her sidekick, a flying tapir named Baku. She treasures her notebook, which she calls her "Kuromi's Journal," where she documents all of My Melody's perceived wrongdoings.</p>
                <p>Kuromi's deepest desire is to defeat My Melody, often detailing her frustration in her journal, but her plots usually fail due to My Melody's oblivious kindness or sheer luck. She is an anti-hero beloved for her honest expression of feelings and being true to herself. She proves that even the toughest exterior can hide a heart full of aspirations, which includes being a great cook, although her specialty is often overlooked.</p>
                <p>Her preferred vehicle is a three-wheeled bicycle, and she considers herself very fashionable, constantly trying to perfect her edgy look.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Kuromi (クロミ)</li><li><strong>Birthday:</strong> October 31st (Halloween), 2005 (Debut Year)</li><li><strong>Signature Item:</strong> Black Jester Hat with a Pink Skull</li><li><strong>Sidekick:</strong> Baku (a flying tapir)</li><li><strong>Favorite Food:</strong> Shallots (Rakkyo)</li></ul>`,
            icon: 'IMG/kuromi-icon.jpg', image: 'IMG/kuromi-profile.jpg'
        },
        hellokitty: {
            fullName: "Hello Kitty", infoTitle: "FULL PROFILE",
            hotspot: { top: 21.5, left: 46.5 }, 
            main: `<p><strong>Hello Kitty</strong> (ハローキティ), full name <strong>Kitty White</strong>, is the globally recognizable face of Sanrio, having debuted in 1974. She is a bright, kind-hearted, and gentle girl known for her iconic <strong>red bow</strong> worn on her left ear. Her philosophy is simple: <strong>"You can never have too many friends!"</strong> She serves as Sanrio's ambassador of friendship and kindness.</p>
                <p>Kitty White lives in London with her parents, George and Mary, and her twin sister, Mimmy. She is a social butterfly who loves music, reading, and traveling. Her favorite things to do include baking cookies and having afternoon tea parties with her friends. She is especially close to her twin sister Mimmy, who wears a yellow bow on her right ear.</p>
                <p>Although she is often shown without a mouth, Sanrio states this is because she "speaks from the heart" and is meant to be a symbol of friendship that encourages people to express themselves and their emotions through her. Her height is measured to be five apples tall and her weight is three apples, giving fans a sweet sense of her size. She dreams of being a concert pianist and enjoys collecting small, cute objects.</p>
                <p>Kitty is a true global phenomenon, having appeared on merchandise ranging from high-end designer collaborations to everyday household items, solidifying her status as a pop culture icon.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Kitty White (ハローキティ)</li><li><strong>Birthday:</strong> November 1st, 1974 (Debut Year)</li><li><strong>Home:</strong> London, England</li><li><strong>Favorite Food:</strong> Mama's homemade Apple Pie.</li><li><strong>Motto:</strong> "You can never have too many friends!"</li></ul>`,
            icon: 'IMG/hellokitty-icon.jpg', image: 'IMG/hellokitty-profile.jpg'
        },
        cinnamoroll: {
            fullName: "Cinnamoroll", infoTitle: "FULL PROFILE",
            hotspot: { top: 30.5, left: 41.5 },
            main: `<p><strong>Cinnamoroll</strong> (シナモロール) is a fluffy, white baby male dog with long ears and a <strong>cinnamon roll-shaped tail</strong>. He is the official mascot of the Café Cinnamon and has consistently ranked as one of Sanrio's most popular characters since his debut in 2002. He was originally found sleeping on a cloud by the cafe owner.</p>
                <p>While often shy, Cinnamoroll is very friendly. His long ears allow him to <strong>fly through the sky like wings</strong>, which he loves to do, often taking naps on fluffy clouds far above the town. This unique ability lets him observe the world from a high vantage point, leading to his dreamy and serene personality.</p>
                <p>He works at the Cafe Cinnamon where he greets customers, though he is generally quiet. He loves making new friends and sharing his delicious cinnamon rolls with visitors. His gentle and helpful nature makes him a great host. He and his friends—Chiffon, Mocha, Espresso, Cappuccino, and Milk—often go on adventures together in the sky and around the town.</p>
                <p>Cinnamoroll has a slight fear of heights despite his flying ability and is known for being slightly clumsy when he's on the ground, but his sweet demeanor always wins people over.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Cinnamoroll (シナモロール)</li><li><strong>Birthday:</strong> March 6th, 2002 (Debut Year)</li><li><strong>Species:</strong> Cloud Dog / Puppy</li><li><strong>Signature Item:</strong> His cinnamon roll-shaped tail.</li><li><strong>Unique Ability:</strong> Flying with his ears.</li></ul>`,
            icon: 'IMG/cinnamoroll-icon.jpg', image: 'IMG/cinnamoroll-profile.jpg'
        },
        pompompurin: {
            fullName: "Pompompurin", infoTitle: "FULL PROFILE",
            hotspot: { top: 60.5, left: 39 }, 
            main: `<p><strong>Pompompurin</strong> (ポムポムプリン) is a chill, friendly, and somewhat clumsy <strong>Golden Retriever dog</strong> who debuted in 1996. He is instantly recognizable by his <strong>brown beret</strong>, which looks exactly like a crème caramel (pudding), hence his name.</p>
                <p>Pompompurin is known for his laid-back and comfort-loving nature. His main interests are sleeping, especially in comfortable spots, and simply having fun. He is incredibly social and loves meeting new friends, often getting into playful mischief with his best friend, Muffin the hamster, and his other pet friends, including a bird and a squirrel.</p>
                <p>A curious hobby of his is collecting shoes—he collects one of each kind! He dreams of becoming a professional baker or musician one day, though his immediate priority is usually finding his next nap spot or favorite snack. He lives in a cozy basket in his owner's house.</p>
                <p>He has a talent for imitating people and is very popular for his easygoing and perpetually happy personality. He is a truly dedicated friend who always puts fun and relaxation first.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Pompompurin (ポムポムプリン)</li><li><strong>Birthday:</strong> April 16th, 1996 (Debut Year)</li><li><strong>Signature Item:</strong> Brown Beret</li><li><strong>Hobby:</strong> Collecting shoes (one of each!), taking naps.</li></ul>`,
            icon: 'IMG/pompompurin-icon.jpg', image: 'IMG/pompompurin-profile.jpg'
        },
        pochacco: {
            fullName: "Pochacco", infoTitle: "FULL PROFILE",
            hotspot: { top: 65.5, left: 71.5 }, 
            main: `<p><strong>Pochacco</strong> (ポチャッコ) is a sweet and sporty white male dog who debuted in 1989. He is known for his slightly floppy ears and his love for strolling and eating banana ice cream. He is generally active and loves playing soccer and basketball. His full-body stance is measured at 110cm tall, equivalent to the height of his curiosity.</p>
                <p>He is a very friendly and curious character, always ready to try something new, even if he's a little clumsy about it. Pochacco is known to live on a small street in Fuwa Fuwa Town and is an enthusiastic athlete, though he can be a little uncoordinated at times, leading to funny situations.</p>
                <p>Pochacco is a loyal friend to everyone he meets. He has many animal friends, but his best friend is a mouse named Choppy. He enjoys walking and running, often covering hundreds of kilometers, and is always looking for new adventures and games to play. His love for banana ice cream is one of his most defining traits.</p>
                <p>He is a bright and energetic dog who truly embodies the spirit of friendly competition and active fun.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Pochacco (ポチャッコ)</li><li><strong>Birthday:</strong> February 29th (Leap Year!), 1989 (Debut Year)</li><li><strong>Species:</strong> Dog (Male)</li><li><strong>Favorite Food:</strong> Banana Ice Cream.</li></ul>`,
            icon: 'IMG/Pochacco-icon.jpg', image: 'IMG/Pochacco-profile.jpg'
        },
        keroppi: {
            fullName: "Keroppi", infoTitle: "FULL PROFILE",
            hotspot: { top: 83, left: 74.5 },
            main: `<p><strong>Keroppi</strong> (けろけろけろっぴ) is a cheerful frog who lives in Donut Pond with his family and friends. He loves adventures and is very athletic, enjoying baseball and swimming. He is always ready to jump into action! His family consists of his parents, his older sister Pikki, and his younger brother Koroppi.</p>
                <p>Keroppi has large eyes and is a very popular character, often seen wearing his signature red bowtie. His active nature makes him a leader among his friends in Donut Pond, who are collectively known as the Keroppi Team. They often play games together near the big tree on the pond.</p>
                <p>His distinctive hop is a defining feature, and he is quite skilled at jumping and swimming, sometimes covering impressive distances. He is known for his upbeat attitude and his constant willingness to help others, especially if it involves an adventure. He lives in a house known as the Kero Kero House, located on the edge of the pond.</p>
                <p>Keroppi's positivity and team spirit make him a beloved figure in the Sanrio universe, symbolizing friendship and fun.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Keroppi (けろけろけろっぴ)</li><li><strong>Birthday:</strong> July 10th, 1988 (Debut Year)</li><li><strong>Species:</strong> Frog (Male)</li><li><strong>Home:</strong> Donut Pond.</li></ul>`,
            icon: 'IMG/Keroppi-icon.jpg', image: 'IMG/Keroppi-profile.jpg'
        },
        littletwinstars: {
            fullName: "LittleTwinStars", infoTitle: "FULL PROFILE",
            hotspot: { top: 35, left: 72.5 }, 
            main: `<p><strong>LittleTwinStars</strong> {リトルツインスターズ}, also known as Kiki and Lala, are twin stars born on Omoiyari Star in the Dream Star-Cloud on Christmas Eve. They are celestial siblings who came to Earth to learn how to be the best friends to everyone. <strong>Kiki</strong> is the boy, with short blue hair, and <strong>Lala</strong> is the girl, with long pink hair, and both are easily recognized by their whimsical, cloud-like aesthetic.</p>
                <p>Lala is the older, more timid twin who loves to write poems and draw. She often leads Kiki, who is naturally curious and sometimes a little bit of a troublemaker. They travel with a star wand and a star-shaped hairbrush, bringing dreams and starlight to Earth as they drift on fluffy clouds. Lala's wand can summon gentle wind.</p>
                <p>Kiki is known for his energy and interest in everything related to space, particularly inventing things and star-fishing. Their story, which debuted in 1975, is centered around friendship, hope, and kindness. They are particularly popular for their dreamy, soft pastel color palette and celestial theme, which evokes a sense of nostalgia and gentle wonder.</p>
                <p>They are inseparable and rely on each other to navigate the human world, spreading happiness wherever they land.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Kiki (male) & Lala (female) </li><li><strong>Birthday:</strong> December 24th, 1975 (Debut Year)</li><li><strong>Species:</strong> Star children (Celestial Twins)</li><li><strong>Signature Item:</strong> Kiki's star wand & Lala's star hairbrush</li><li><strong>Unique Ability: </strong>Bringing dreams and starlight to Earth</li></ul>`,
            icon: 'IMG/littletwinstars-icon.jpg',
            image: 'IMG/littletwinstars-profile.jpg'
        },
        usahana: {
            fullName: "Usahana", infoTitle: "FULL PROFILE",
            hotspot: { top: 49.5, left: 38.5 },
            main: `<p><strong>Usahana</strong> (ウサハナ) is a cheerful, lively little rabbit girl who debuted in 2001. Her name comes from the Japanese words "usagi" (rabbit) and "hana" (flower), reflecting her favorite pastime: dancing and collecting flowers to decorate her home on the Flower Island.</p>
                <p>Usahana is known for her enthusiasm and always having a positive attitude. She dreams of becoming a professional dancer and practices her moves with her friends, often wearing her signature colorful outfit and a flower tucked behind her ear. Her confidence and energy make her a natural leader when it comes to organizing outdoor fun and activities.</p>
                <p>Her hobbies include making accessories out of the flowers she finds, such as colorful wreaths and crowns, and writing letters to her friends to keep in touch. She is a dedicated friend and often uses the language of flowers to express her feelings, carefully choosing blooms that represent joy, friendship, and encouragement. Her bright and sunny disposition makes her a symbol of pure joy and summer fun, and her aesthetic often features vibrant, cheerful pastels.</p>
                <p>Usahana embodies a spirit of creativity and optimism, proving that surrounding yourself with nature and color is the best way to live a happy, fulfilling life. She is a true ray of sunshine in the Sanrio world!</p>`,
            detailed: `<ul><li><strong>Name:</strong> Usahana (ウサハナ)</li><li><strong>Birthday:</strong> April 16th, 2001 (Debut Year)</li><li><strong>Species:</strong> Rabbit Girl</li><li><strong>Hobby:</strong> Dancing and collecting flowers.</li><li><strong>Home:</strong> Flower Island.</li></ul>`,
            icon: 'IMG/usahana-icon.jpg',
            image: 'IMG/usahana-profile.jpg'
        },
        badtzmaru: {
            fullName: "Badtz-Maru", infoTitle: "FULL PROFILE",
            hotspot: { top: 84, left: 50.5 }, 
            main: `<p><strong>Badtz-Maru</strong> (バッドばつ丸) is a mischievous, penguin boy who debuted in 1993. He is a member of the "Hello Kitty's Pals" and is the main character in the series "Badtz-Maru and the Biker Gang." He is easily recognized by his spiky hair and perpetual grumpy expression.</p>
                <p>Despite his intimidating appearance, Badtz-Maru is an endearing character with a dream of becoming the biggest and best villain, though he rarely succeeds. He is very stylish, often sporting sunglasses and a serious suit, which contrasts with his home, a cave in Oedo. He attends the prestigious Pochacco Academy but is known for skipping class and generally causing harmless trouble. He has a younger twin sister named Badztina.</p>
                <p>He is known for collecting pictures of famous villains and dreaming of financial success, often expressing his displeasure with the world with his signature "I am the best" attitude, making him a popular choice for fans of Sanrio's anti-heroes. He views the world with a cynical, yet ultimately good-natured, perspective. His constant attempts to be cool and his humorous failures are what make him so relatable and beloved by fans of all ages.</p>
                <p>Badtz-Maru's name is a pun on Japanese words: "Batsu" (ばつ) means "X" or "incorrect," and "Maru" {まる} means "O" or "correct." His name essentially means "Wrong-Correct" or "Bad-Good," perfectly capturing his duality as a charming rascal. His favorite food is ramen, and his hobbies include collecting superhero figurines and playing the piano.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Badtz-Maru (バッドばつ丸)</li><li><strong>Birthday:</strong> April 1st (April Fool's Day), 1993 (Debut Year)</li><li><strong>Species:</strong> Penguin Boy</li><li><strong>Distinguishing Feature:</strong> Spiky hair and grumpy face.</li><li><strong>Dream:</strong> To be the world's greatest villain.</li></ul>`,
            icon: 'IMG/badtzmaru-icon.jpg',
            image: 'IMG/badtzmaru-profile.jpg'
        },
        tuxedosam: {
            fullName: "Tuxedosam", infoTitle: "FULL PROFILE",
            hotspot: { top: 67, left: 57 }, 
            main: `<p><strong>Tuxedosam</strong> (タキシードサム) is a profoundly dapper and irresistibly charming penguin from the frigid yet elegant Tuxedo Island in Antarctica. Debuting in 1979, he is instantly recognized by his plump build and his signature impeccable fashion sense, which centers around his massive collection of 365 bow ties—a different one for every single day of the year! He is known for being a friendly, polite, and easy-going fellow who carries himself with sophisticated grace, though his enthusiasm sometimes leads to him being a bit clumsy and prone to tripping.</p>
                <p>Sam is very fashionable and has a great sense of taste, not just in clothing but also in food. He loves to eat and is particularly fond of shrimp and other fine seafood. Despite his formal attire, he has a playful spirit and enjoys various competitive sports, including tennis, sailing, and golf.</p>
                <p>He is highly educated, speaks fluent "Penguinese" in addition to English, and is considered the intellectual of the group. His best friends are his two younger, equally stylish brothers, the playful twins Pam and Tam. Tuxedosam represents a charming blend of elegance, intellect, and fun, making him a timeless and beloved Sanrio character who reminds everyone that it's okay to be both smart and fashionable.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Tuxedosam (タキシードサム)</li><li><strong>Birthday:</strong> May 12th, 1979 (Debut Year)</li><li><strong>Species:</strong> Penguin (Male)</li><li><strong>Home:</strong> Tuxedo Island, Antarctica</li><li><strong>Hobby:</strong> Collecting and coordinating his extensive collection of 365 bow ties.</li><li><strong>Special Skill:</strong> Speaking fluent English and "Penguinese."</li></ul>`,
            icon: 'IMG/Tuxedosam-icon.jpg',
            image: 'IMG/Tuxedosam-profile.jpg'
        },
        bonbonribbon: {
            fullName: "Bonbonribbon", infoTitle: "FULL PROFILE",
            hotspot: { top: 62, left: 49 },
            main: `<p><strong>Bonbonribbon</strong> (ぼんぼんりぼん) is a stylish, cheerful, and highly ambitious pink rabbit who is passionate about fashion, performance, and all things beautiful. Introduced in 2012, her most distinguishing feature is the large, multi-layered, elegant ribbon she wears on her head, which is a gift from her designer mother and is a source of immense pride and inspiration. This ribbon is her trademark and a symbol of her grand dream to become a celebrated fashion designer herself, combining her love for dance and clothing.</p>
                <p>She is a very talented and dedicated dancer, specializing in ballet and often exploring other graceful styles. She attends a dance school with her close friends, the charming cat twins Ruru and Rarara, and loves performing on stage, always aiming for a perfect and graceful routine. Her mother's influence has made her very knowledgeable about trends, fabrics, and accessories, and she enjoys creating her own unique styles and organizing fashion shows for her friends.</p>
                <p>Bonbonribbon is fiercely optimistic and always encourages her friends to follow their dreams and embrace their own creative passions. She represents creativity, ambition, and the joy of bold, vibrant self-expression through art and dance.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Bonbonribbon (ぼんぼんりぼん)</li><li><strong>Birthday:</strong> August 8th, 2012 (Debut Year)</li><li><strong>Species:</strong> Rabbit (Female)</li><li><strong>Dream:</strong> To become a professional fashion designer and a successful ballerina.</li><li><strong>Signature Accessory:</strong> Her large, layered bow/ribbon.</li><li><strong>Special Skill:</strong> Ballet and stage performance.</li></ul>`,
            icon: 'IMG/bonbonribbon-icon.jpg',
            image: 'IMG/bonbonribbon-profile.jpg'
        },
        pekkle: {
            fullName: "Pekkle", infoTitle: "FULL PROFILE",
            hotspot: { top: 92, left: 36 }, 
            main: `<p><strong>Pekkle</strong> (アヒルのペックル) is a wonderfully kind-hearted, friendly, and slightly awkward white duck from Australia who debuted in 1989. He is a simple and humble character who loves singing and dancing, particularly tap dancing, and is known for wearing a simple striped t-shirt. Though he is not a professional, he takes lessons and practices his routines with great enthusiasm, often spending hours perfecting a single step.</p>
                <p>Pekkle is known for his sweet nature, but he can be a bit of a slow walker and sometimes gets into funny, clumsy situations due to his absent-mindedness. His enduring dream is to one day fly, and he often tries various inventive (and usually unsuccessful) methods to get airborne, such as using makeshift wings or jumping off tall objects.</p>
                <p>Despite his repeated failures, he never loses his optimistic outlook or his determination to try again. He has a devoted girlfriend named Ruby and a best friend named Pich, who is a small fish. Pekkle is a loyal and caring friend who embodies the joy of simple hobbies and the importance of perseverance, even when the goal seems impossible.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Pekkle (アヒルのペックル)</li><li><strong>Birthday:</strong> July 27th, 1989 (Debut Year)</li><li><strong>Species:</strong> Duck (Male)</li><li><strong>Home:</strong> Australia</li><li><strong>Hobby:</strong> Singing karaoke and tap dancing.</li><li><strong>Goal:</strong> Learning to fly.</li></ul>`,
            icon: 'IMG/Pekkle-icon.jpg',
            image: 'IMG/Pekkle-profile.jpg'
        },
        monkichi: {
            fullName: "Monkichi", infoTitle: "FULL PROFILE",
            hotspot: { top: 57, left: 30.5 }, 
            main: `<p><strong>Monkichi</strong> (おさるのもんきち), whose full name is Osaru no Monkichi, is an incredibly energetic, optimistic, and highly intelligent monkey who debuted in 1992. He is known for his extreme love of bananas and his astonishing skill: he can eat ten of them in just one minute! He lives happily on a small mountain in the Japanese countryside with his large, supportive family and many friends.</p>
                <p>Monkichi is famous for his cheerful disposition, his playful nature, and his deep affection for telling jokes and puns, though they don't always land perfectly with his audience. He is a bit of a show-off but in a charming and harmless way, driven by his dream to one day become a famous poet or comedian on the national stage, and he is constantly practicing his craft. His upbeat personality is contagious, and he can often be found climbing trees with unmatched agility, playing fast-paced games, and, of course, sharing his beloved bananas with anyone who asks.</p>
                <p>Monkichi represents boundless energy, humor, and the simple joy of having a good laugh with friends while relentlessly pursuing an ambitious dream.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Osaru no Monkichi (おさるのもんきち)</li><li><strong>Birthday:</strong> January 13th, 1992 (Debut Year)</li><li><strong>Species:</strong> Monkey (Male)</li><li><strong>Home:</strong> A small mountain in the Japanese countryside.</li><li><strong>Special Skill:</strong> Eating 10 bananas in one minute.</li><li><strong>Dream:</strong> To become a famous poet or comedian.</li></ul>`,
            icon: 'IMG/Monkichi-icon.jpg',
            image: 'IMG/Monkichi-profile.jpg'
        },
        hangyodon: {
            fullName: "Hangyodon", infoTitle: "FULL PROFILE",
            hotspot: { top: 31.5, left: 35.5 },
            main: `<p><strong>Hangyodon</strong> (ハンギョドン) is a quirky, highly unusual, and wonderfully comical fish-man character who was introduced in 1985. He is characterized as a lonely romantic and a bit of an outcast who dreams passionately of becoming a major hero, using his unique skills to help others. However, his ambitious plans often go comically wrong, leading to funny and relatable failures. Despite his setbacks, he never loses his sense of humor or his determination to succeed.</p>
                <p>He has a very expressive, distinctive face, particularly his large, kind eyes and full lips, which make him a natural on stage. Hangyodon is a very talented comedian and performer and enjoys making others laugh, often using self-deprecating humor. He is an empathetic and highly sensitive character who deeply values his close friendships, especially with his best friend, a small octopus named Sayuri, who is his biggest supporter and confidante. Hangyodon lives in a house inspired by traditional Chinese architecture and loves eating cold noodles and shrimp crackers. He is a unique and endearing character in the Sanrio universe, representing the idea that it's okay to be a little bit different, and that true heroism often comes from being kind, funny, and true to yourself.</p>`,
            detailed: `<ul><li><strong>Name:</strong> Hangyodon (ハンギョドン)</li><li><strong>Birthday:</strong> March 14th, 1985 (Debut Year)</li><li><strong>Species:</strong> Fish-man (Male)</li><li><strong>Best Friend:</strong> Sayuri (an octopus)</li><li><strong>Dream:</strong> To be a hero and a comedian.</li><li><strong>Favorite Food:</strong> Cold noodles and shrimp crackers.</li></ul>`,
            icon: 'IMG/Hangyodon-icon.jpg',
            image: 'IMG/Hangyodon-profile.jpg'
        }
    };

    function removeLogo() {
        const existingLogo = document.getElementById('main-page-logo');
        if (existingLogo) {
            existingLogo.remove();
        }
    }

    function removeInteractiveImage() { 
        const existingInteractiveImage = document.getElementById('interactive-image-container');
        if (existingInteractiveImage) {
            existingInteractiveImage.remove();
        }
    }

    function toggleActiveLink(activeLink) {
        sanrioMainLink.classList.remove('active');
        sanrioGalleryLink.classList.remove('active');
        if (activeLink) {
            activeLink.classList.add('active');
        }
        if (activeLink !== sanrioGalleryLink) {
             allButtons.forEach(btn => btn.classList.remove('active'));
        }
    }

    function loadSanrioMainInfo() {
        removeInteractiveImage();
        toggleActiveLink(sanrioMainLink);

        wikiContainer.classList.remove('gallery-active');

        leftColumn.style.display = 'flex';
        middleColumn.style.display = 'flex';
        rightColumn.style.display = 'none';

        middleColumn.style.flex = '2';
        
        detailImage.style.borderRadius = '10px';
        detailImage.style.width = '120px';
        detailImage.style.height = 'auto';
        detailImage.style.borderColor = '#FFD0E0';
        
        infoTitle.textContent = "Welcome To Sanrio Wiki!";
        
        removeLogo(); 

        const logoHtml = `
            <div id="main-page-logo" style="display: flex; justify-content: center; margin-bottom: 20px;">
                <img src="IMG/Sanrio-Wiki-Logo.png" alt="Sanrio Wiki Logo" style="width: 150px; height: auto;">
            </div>
        `;
        infoTitle.insertAdjacentHTML('beforebegin', logoHtml);

        mainInfoContent.innerHTML = `
            <p>Sanrio Company, Ltd. (株式会社サンリオ) is a Japanese entertainment company that stands as the global purveyor of <strong>kawaii</strong> (cute) culture, a phenomenon it has championed since its founding in 1960. The company's origins lie in the vision of founder Shintaro Tsuji, who recognized the power of small gestures to foster connection, leading to Sanrio's foundational philosophy: "Small Gift, Big Smile" (ちっちゃな贈り物、大きな笑顔). Originally established as the Yamanashi Silk Center, the business quickly shifted its focus to designing and selling unique gift products, predicated on the belief that a well-chosen, cute item could cultivate friendship and social communication (<strong>Minna Nakayoku</strong> - Getting Along Together) among people across the globe.</p>
            <p>Sanrio's vast and constantly evolving universe is home to hundreds of unique characters, each crafted with a distinct personality and backstory. The most recognizable face of the brand is <strong>Hello Kitty (Kitty White)</strong>, who debuted in 1974 and quickly became a global cultural icon known for her signature red bow and kind-hearted nature. Other beloved classic characters include the cheerful white rabbit <strong>My Melody</strong>, the sporty black cat <strong>Chococat</strong>, and the adorable three-brother pup known as <strong>Chibimaru</strong>. Maintaining this legacy, newer characters have surged in popularity, such as <strong>Cinnamoroll</strong>, a flying puppy with a cinnamon roll-shaped tail, and <strong>Pompompurin</strong>, a laid-back golden retriever known for his pudding-like beret, who often dominate the annual fan-voted Sanrio Character Ranking.</p>
            <p>The appeal of the Sanrio family lies in its diversity, which allows it to connect with a wide array of demographics. Alongside the purely sweet figures like My Melody and the charming fawn <strong>Little Forest Fellow</strong>, Sanrio has successfully introduced figures that tap into modern sensibilities. These include the rebellious, gothic-styled rabbit <strong>Kuromi</strong>, who serves as My Melody's foil and is known for her impish grin and black-and-pink aesthetic. This strategic blend of traditional cute figures with contemporary, relatable figures has allowed Sanrio to remain relevant across generations, from children to adults who appreciate the nuanced character concepts.</p>
            <p>Beyond merchandise, Sanrio operates as a powerful global entertainment and licensing giant. The company utilizes its extensive roster of characters—including Hello Kitty, Cinnamoroll, and Pompompurin—for everything from high-end fashion collaborations to themed aviation, firmly embedding its intellectual property into luxury and mass culture alike. In Japan, Sanrio offers immersive character experiences through its theme parks, Sanrio Puroland and Harmonyland. Ultimately, the company's enduring strength is its ability to market more than just products; it markets a universal feeling of <strong>friendship, kindness, and positivity</strong>, which continues to fuel its global expansion and cement its position as a leading force in the world of character merchandising.</p>
        `;
        detailedInfoContent.innerHTML = `
            <ul>
                <li><strong>Founded:</strong> August 10, 1960</li>
                <li><strong>Founder:</strong> Shintaro Tsuji</li>
                <li><strong>Headquarters:</strong> Tokyo, Japan</li>
                <li><strong>Mascot:</strong> Hello Kitty</li>
                <li><strong>Mission:</strong> "Small Gift, Big Smile" ($\text{ちっちゃな贈り物、大きな笑顔}$)</li>
            </ul>
        `; 
    }


    function loadCharacter(characterId, isFromGallery = false) {
        removeLogo();
        removeInteractiveImage();

        leftColumn.style.display = 'flex';
        rightColumn.style.display = 'flex';
        wikiContainer.classList.remove('gallery-active');
        middleColumn.style.flex = '2';
        
        const data = charactersData[characterId];
        
        detailImage.style.borderRadius = '50%';
        detailImage.style.width = '150px';
        detailImage.style.height = '150px';
        detailImage.style.borderColor = '#FFC0CB';

        if (data) {
            infoTitle.textContent = data.infoTitle;
            mainInfoContent.innerHTML = data.main;
            detailedInfoContent.innerHTML = data.detailed;
            detailImage.src = data.image;
            detailImage.alt = `${characterId} detailed image`;
            detailImageLabel.textContent = data.fullName;

            if (!isFromGallery) {
                allButtons.forEach(btn => btn.classList.remove('active'));
                const activeNavButton = document.querySelector(`.nav-button[data-character="${characterId}"]`);
                if (activeNavButton) {
                    activeNavButton.classList.add('active');
                }
            }
            if (isFromGallery) {
                 wikiContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            
            loadSanrioMainInfo();
        }

        toggleActiveLink(sanrioMainLink);
    }
    
    function loadInteractiveCharacterImage() { 
        removeLogo();
        toggleActiveLink(sanrioGalleryLink); 

        wikiContainer.classList.add('gallery-active');
        leftColumn.style.display = 'none';
        rightColumn.style.display = 'none';
        middleColumn.style.flex = '3';

        infoTitle.textContent = "Interactive Sanrio Character Gallery";
        
        const interactiveImageHtml = `
        <div id="interactive-image-container">
            <img src="IMG/Sanrio-group-photo.jpg" alt="Sanrio Characters Group" id="group-character-image">
            <div id="character-hotspots-container">
            ${Object.keys(charactersData).map(charId => {
                const char = charactersData[charId];
                if (!char) return '';

                const spots = char.hotspots && char.hotspots.length
                ? char.hotspots
                : (char.hotspot ? [char.hotspot] : []);

                return spots.map((spot, idx) => `
                <div class="character-hotspot" 
                    data-character-id="${charId}" 
                    data-sub-id="${idx}"
                    style="top: ${spot.top}%; left: ${spot.left}%;" 
                    title="Click to learn more about ${char.fullName}">
                    <span class="hotspot-label">${char.fullName}</span>
                </div>
                `).join('');
            }).join('')}
            </div>
        </div>
        `;
        
        mainInfoContent.innerHTML = interactiveImageHtml;
        
        detailImage.src = '';
        detailImage.alt = "Click a character on the image!";
        detailImage.style.borderRadius = '0';
        detailImage.style.width = '120px';
        detailImage.style.height = 'auto';
        detailImage.style.border = 'none';

        detailImageLabel.textContent = "Click a character!";
        detailedInfoContent.innerHTML = `
            <p style="text-align: center;">Click on a character in the image above to view their profile details. 💖</p>
            <p style="text-align: center;">Hover your cursor over the characters to see the interactive zone!</p>
        `;
        
        const characterHotspots = document.querySelectorAll('.character-hotspot');
        characterHotspots.forEach(hotspot => {
            hotspot.addEventListener('click', function() {
                const charId = this.getAttribute('data-character-id');
                loadCharacter(charId, true);
            });
        });
    }

    navButtons.forEach(button => {
        const char = button.dataset.character;
        const iconImg = button.querySelector('.char-icon');
        if (iconImg && charactersData[char] && charactersData[char].icon) {
            iconImg.src = charactersData[char].icon;
            iconImg.alt = `${char} icon`;
        }

        button.addEventListener('click', () => {
            loadCharacter(button.dataset.character);
        });
    });

    sanrioMainLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadSanrioMainInfo();
    });

    sanrioGalleryLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadInteractiveCharacterImage(); 
    });

    loadSanrioMainInfo(); 
});
