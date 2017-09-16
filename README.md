# This is MaeklongFood (Back-end)

###**To Run Project**###

1. Switch to **LabRESTapis** directory. Then,
`cd LabRESTapis`
2. Download dependencies 
`npm install` or `yarn`
3. Run tsc
`yarn ts`
4. run`mongodb` and start mongoShell `mongo` in command line or use Robo3T (not 4T,5T)

 :scream: example :scream:
```
db.posts.insertMany([
{ featured_image: "https://1.bp.blogspot.com/-XDD0WL2peO0/WZdsg8vTTRI/AAAAAAAADDk/eQ0hUotpuV8n90HaxAOgtKH3839tjmYKgCLcBGAs/s1600/20140328_IMG_3359.JPG" ,content: "ปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาลาปลากรอบ3รสปลาปลา",slug: "1",title: "ปลากรอบ"},
{ featured_image: "http://4.bp.blogspot.com/-8PyUSbf6_BE/VqnQjHOAvmI/AAAAAAAACoc/3RSMrSkYt40/s1600/001-IMG_3204.jpg" ,content: "ปลากรอบรสปลาปลาปลากรอบ3รสปลาปปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาลาปลากรอบ3รสปลาปลา",slug: "2",title: "แซลม่อนกรอบ"},
{ featured_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2uotrdhTK3rBPBzxdX7r5OWX6oqKKysuTzsYxjuFcZ8ZhgS8u" ,content: "ปลากรอบ1รสปลาปลาปลากรอบ3รสปลาปปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาลาปลากรอบ3รสปลาปลา",slug: "3",title: "ปลาแดดเดียว"},
{ featured_image: "http://deenathaishop.com/images/maeklong_fl/fs06_b.jpg" ,content: "ปลากรอบ2รสปลาปลาปลากรอบ3รสปลาปปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาลาปลากรอบ3รสปลาปลา",slug: "4",title: "ปลาเหลืองๆ"},
{ featured_image: "http://dn.lnwfile.com/_/dn/_raw/1w/i4/ux.jpg" ,content: "ปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาลาปลากรอบ3รสปลาปลา",slug: "5",title: "ปลาเหลืองเล็ก"},
{ featured_image: "http://1.bp.blogspot.com/-p-Hov5s6P2U/VqnQjLEXMrI/AAAAAAAACok/wj_83X99XKM/s1600/002-IMG_5068.jpg" ,content: "ปลากรอบ4รสปลาปลาปลากรอบ3รสปลาปปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาลาปลากรอบ3รสปลาปลา",slug: "6",title: "หนังปลาแซลฯ"},
{ featured_image: "https://img-wongnai.cdn.byteark.com/p/s/2017/04/30/1b3b170433964c64be263270877fbf08.jpg" ,content: "ปลากรอบ5รสปลาปลาปลากรอบ3รสปลาปปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาลาปลากรอบ3รสปลาปลา",slug: "7",title: "ปลาแดดเดียว"},
{ featured_image: "http://rakbankerd.com/kaset/Animal/1344_1.jpg" ,content: "ปลากรอบ6รสปลาปลาปลากรอบ3รสปลาปปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาลาปลากรอบ3รสปลาปลา",slug: "8",title: "ปลากระตักกรอบ"},
{ featured_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALSrUdp9o_mgBC8qHEcSfG66tzvvsUBzDPuIMTbHy1dotHW1Q" ,content: "ปลากรอบ7รสปลาปลาปลากรอบ3รสปลาปปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาลาปลากรอบ3รสปลาปลา",slug: "9",title: "ปลาแก้ว"},
{ featured_image: "https://f.ptcdn.info/029/023/000/1409738078-a01JPG-o.jpg" ,content: "ปลากรอบ8รสปลาปลาปลากรอบ3รสปลาปปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาปลากรอบ3รสปลาปลาลาปลากรอบ3รสปลาปลา",slug: "10",title: "ปลาย่าง"}
])

```

5. Run the project
`yarn server`

#####Open the browser and hit the url `http://127.0.0.1:8080/api/v1/post` and `http://127.0.0.1:8080/api/v1/users` to see the Json&สคริปโง่วๆ.#####

																	ติดขัดตรงไหนไม่ต้องมองมาทางนี้นะพวก ซุนวูยาวไป