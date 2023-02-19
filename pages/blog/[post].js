import React from "react";
import { useRouter } from "next/router";
import client from "../../client";

const Post = ({ post }) => {
  const router = useRouter();
  console.log(router.query.post);
  console.log("Post", post?.slug?.current);

  // async function getStaticPaths(){
  //   const paths = await client.fetch(
  //     `*[_type == "post" && ]`
  //   )
  // }
  return (
    <article className="p-3 w-8/12 m-auto text-justify">
      <div className="mt-3">
        <h2 className="p-2 text-green-400 font-bold text-3xl">
          {" "}
          15 Disadvantages Of Freedom And How You Can Work Around It.
        </h2>
        <p className="font-light text-sm p-2 text-gray-400">
          written by <span>@samurai2019</span> <br /> on 27 may 2022
        </p>
      </div>

      <div className="mt-8 p-2">
        <p className="tracking-wider">
          <span className="font-bold text-5xl tracking-wide leading-10">L</span>
          orem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
          dolor, sed illo ex cum laborum suscipit at ducimus, aut repellendus
          est cumque voluptas similique quasi veniam. Alias, tempore maxime quod
          quo assumenda consequatur veritatis. Itaque blanditiis sint quos natus
          ea, optio accusantium libero tempore dolore soluta. Repellendus
          perferendis reiciendis atque nemo modi repellat sapiente, suscipit ab
          reprehenderit porro nisi voluptatum voluptate numquam incidunt hic
          quia vel laborum fugit corrupti iure corporis delectus. Quis
          consequuntur aperiam ea explicabo in repellendus, pariatur dolore sit
          nam, architecto quia dicta distinctio labore voluptas! Placeat
          perferendis nemo dolorum veritatis ab maxime? Repellendus pariatur
          exercitationem temporibus dolor alias fugiat officia reiciendis
          cupiditate voluptatibus. Atque incidunt omnis qui architecto hic
          assumenda libero. <br /> <br /> Provident quod exercitationem
          consequatur natus soluta maiores laborum culpa. Esse alias quis saepe
          quo officiis recusandae repudiandae porro ut quas totam, dolorem
          ducimus delectus tenetur nesciunt facere fugit minima. Sunt alias
          optio itaque rerum ut dolorum error autem molestias, nostrum deleniti
          ipsa, et commodi assumenda eum fuga? Unde alias quo ducimus, sequi
          voluptate ipsam magni, enim non assumenda quos dolore nam, ipsa a
          nihil reprehenderit explicabo soluta! Quia debitis magnam aspernatur,
          consequuntur enim praesentium modi consequatur ipsa quidem ea harum!
          Explicabo officiis cumque perspiciatis magni doloremque sit
          exercitationem autem dolore cupiditate ex quis distinctio, reiciendis
          quas possimus quae nesciunt esse eos temporibus iste non suscipit
          ratione dignissimos cum maiores. Ut consequatur ipsum cum, iusto a
          inventore excepturi rem repellendus minus ipsa ratione odio earum
          tempora beatae nam voluptatibus.
          <br /> <br /> Eius et veritatis ex enim ut. Nesciunt natus fugiat
          alias rem, voluptatibus magni maiores nam dolore assumenda quidem
          aliquid dolor eos adipisci blanditiis mollitia, eligendi temporibus
          quisquam commodi. Quis quia est, obcaecati esse laboriosam
          perspiciatis mollitia, dolore vel iusto aliquam maiores debitis
          pariatur minus! A accusantium reiciendis odit corporis obcaecati culpa
          modi temporibus nemo. Dolor corporis, et obcaecati autem recusandae
          illum, nihil quia iure voluptatem placeat rem dolore itaque. Ratione,
          exercitationem atque molestias tenetur quidem vel quasi maiores quas
          dolores repudiandae ducimus, iusto odit sequi ut animi perferendis
          nemo minus, temporibus voluptatem impedit nihil? Ut officia
          reprehenderit vero recusandae sapiente sint vitae hic, aliquid
          provident, mollitia error eaque? Reprehenderit eos corporis iusto
          exercitationem asperiores quos tempore saepe possimus dolorum.
          <br /> <br /> Ratione beatae dolore non ipsam nobis maxime aut totam
          quo corrupti aspernatur, recusandae eveniet ducimus, est expedita
          adipisci quas fugiat esse deleniti blanditiis et molestias eius minima
          cupiditate quasi. Asperiores, minima quas! Blanditiis ut tempora vel
          autem esse, iste magni molestiae nobis animi eos! Ullam corporis
          quidem commodi nemo eos, amet, magnam similique id officia ratione
          excepturi explicabo fuga nostrum voluptates aliquam exercitationem
          vitae reprehenderit. Consequuntur exercitationem reprehenderit
          corrupti, accusantium expedita explicabo velit facilis molestias,
          officia optio sint reiciendis nesciunt rerum porro quis dolore a
          recusandae delectus tenetur nisi maiores vero est tempora. <br />{" "}
          <br /> Eligendi voluptas ipsum facere earum nemo et dicta similique
          omnis aliquam autem. Nobis eos deleniti aperiam consectetur labore
          tempora tempore quae adipisci impedit voluptate officia ea aliquam
          harum assumenda alias, autem nostrum ut possimus ab perferendis
          architecto optio. Id illum reprehenderit excepturi cupiditate. Nobis
          omnis esse provident vero deleniti quos aspernatur suscipit culpa
          perferendis, labore laborum et, unde voluptas illum? Ipsa deleniti est
          commodi atque, totam aliquid adipisci quibusdam consequatur iste, non
          nesciunt sequi? Dolorem aspernatur tempore non suscipit laboriosam?
          Mollitia molestias laborum reprehenderit porro amet veritatis. Aut
          incidunt nam nostrum voluptate minus, perferendis voluptates error
          perspiciatis veniam necessitatibus numquam, dolor qui dicta.
          <br /> <br /> Fugit veritatis accusamus quisquam in nobis suscipit
          numquam quia. Saepe incidunt commodi provident magnam, quaerat
          consequatur, voluptatem facere atque eaque alias id temporibus debitis
          corporis laborum enim totam eius recusandae modi. Ut id, iure
          praesentium, maxime cupiditate excepturi cum voluptate repudiandae
          sequi iste vel minus suscipit qui quas? Deleniti nemo obcaecati
          ducimus? Doloremque, obcaecati suscipit. Ipsum reiciendis officia
          beatae labore sit error pariatur nihil laborum eligendi exercitationem
          tempore inventore modi dolor cupiditate suscipit delectus sunt, alias,
          atque hic? Quisquam recusandae ex debitis tenetur veniam atque, enim
          possimus, maiores magnam, molestiae porro. Laborum debitis odit veniam
          repellat maxime quidem eum. Reiciendis voluptatem quae architecto rem
          repellat quis ex corrupti, optio harum ipsum similique pariatur? Quasi
          molestias, omnis corporis consequuntur fugit atque magni, at non
          maiores placeat, obcaecati reprehenderit. Omnis, qui repellat. Saepe
          quas inventore rerum quaerat vitae iste nemo optio dignissimos atque
          libero ad nisi nobis voluptates expedita quidem illum aliquid maiores
          sapiente possimus perspiciatis, facilis magnam soluta fugit error!
          Fugit doloribus aut laboriosam commodi blanditiis maxime pariatur
          laudantium soluta suscipit, officia ipsum fuga, consequuntur dolores
          accusamus voluptates nulla natus provident neque, sunt vero
          recusandae.
          <br /> <br /> Possimus, aspernatur optio quasi temporibus nam ipsum
          enim nulla dolor distinctio fugiat nisi, nostrum perferendis
          praesentium ex ad dicta, molestias quos provident numquam aliquam.
          Vero accusamus quidem ea unde molestias distinctio quos, placeat
          dicta, nesciunt nobis est culpa ullam consectetur libero aliquam illo
          beatae sunt saepe accusantium? Modi culpa dolorum esse sunt, excepturi
          atque voluptatibus deleniti! In, ut. Repellat quidem architecto quas
          laborum, quaerat et voluptatibus deserunt veritatis ab perferendis
          harum, illum, officiis delectus facilis. Illum officia eius, harum,
          vitae assumenda distinctio repellendus omnis ea modi laboriosam magni.
          Quae exercitationem ad animi ratione maxime fugiat magnam nihil. Modi
          temporibus sequi ratione quaerat? Earum, nobis consequuntur enim
          itaque repellat sed ex autem dolorum aut eos magnam nostrum, totam
          tenetur excepturi temporibus natus voluptatum cum nihil pariatur, modi
          inventore! Ducimus autem praesentium mollitia ipsam odio eius error
          non. Soluta molestiae debitis repellendus officia, aperiam quaerat
          repudiandae at assumenda esse ea, tenetur, inventore similique quo ex
          dolore natus minima. <br /> <br /> Dignissimos eum inventore, quo
          tempora aliquam provident quis quaerat ea officiis unde illo, dicta
          iusto officia? Illo beatae a, velit ipsum tempora cumque? Dolores
          aperiam accusamus vitae dignissimos sapiente reprehenderit deserunt,
          obcaecati temporibus perferendis quo veniam delectus fuga enim
          mollitia. Totam dolorem consequatur, perspiciatis iusto reprehenderit
          esse ducimus voluptates? Illum, eligendi saepe consectetur ea
          quibusdam commodi? Porro nobis aperiam maxime quibusdam sit minus
          totam nam vitae optio sint ex fuga, assumenda fugiat illo aut, minima
          itaque nisi. Sit et officia nulla eos non a amet labore quidem quaerat
          possimus ad, nam quam fuga aperiam nostrum maiores cumque? Voluptatum
          dicta doloribus cumque sit.
        </p>
      </div>
    </article>
  );
};

export default Post;
