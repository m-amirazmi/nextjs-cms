"use client";

import { Content } from "@/types/store.types";

interface DynamicPageProps {
  content: Content;
}

export default function DynamicPage({ content }: DynamicPageProps) {
  console.log(content);
  return (
    <>
      <h1 className="text-6xl">{content.title}</h1>
      <p className="text-4xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
        doloribus omnis eum harum? Deserunt cupiditate mollitia eaque sapiente
        optio asperiores ipsa blanditiis alias, totam porro voluptas fugiat
        accusamus reprehenderit, at ducimus rem, sunt quaerat et? Maiores
        aspernatur et vitae culpa ad voluptatem deserunt debitis, magnam
        voluptate veritatis! Sint rem eius temporibus aut optio tempore deleniti
        provident? Eos atque, harum voluptas natus suscipit perferendis expedita
        minus mollitia exercitationem itaque similique tempora eveniet dolor,
        eius reprehenderit voluptate corporis perspiciatis cum delectus!
        Deserunt molestiae odio eius? Fuga iusto repudiandae magni ipsa
        reiciendis culpa, minima tempore laboriosam laudantium non at distinctio
        cum ad quia. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quidem doloribus omnis eum harum? Deserunt cupiditate mollitia eaque
        sapiente optio asperiores ipsa blanditiis alias, totam porro voluptas
        fugiat accusamus reprehenderit, at ducimus rem, sunt quaerat et? Maiores
        aspernatur et vitae culpa ad voluptatem deserunt debitis, magnam
        voluptate veritatis! Sint rem eius temporibus aut optio tempore deleniti
        provident? Eos atque, harum voluptas natus suscipit perferendis expedita
        minus mollitia exercitationem itaque similique tempora eveniet dolor,
        eius reprehenderit voluptate corporis perspiciatis cum delectus!
        Deserunt molestiae odio eius? Fuga iusto repudiandae magni ipsa
        reiciendis culpa, minima tempore laboriosam laudantium non at distinctio
        cum ad quia. laboriosam laudantium non at distinctio cum ad quia. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Quidem doloribus
        omnis eum harum? Deserunt cupiditate mollitia eaque sapiente optio
        asperiores ipsa blanditiis alias, totam porro voluptas fugiat accusamus
        reprehenderit, at ducimus rem, sunt quaerat et? Maiores aspernatur et
        vitae culpa ad voluptatem deserunt debitis, magnam voluptate veritatis!
        Sint rem eius temporibus aut optio tempore deleniti provident? Eos
        atque, harum voluptas natus suscipit perferendis expedita minus mollitia
        exercitationem itaque similique tempora eveniet dolor, eius
        reprehenderit voluptate corporis perspiciatis cum delectus! Deserunt
        molestiae odio eius? Fuga iusto repudiandae magni ipsa reiciendis culpa,
        minima tempore laboriosam laudantium non at distinctio cum ad quia.
      </p>
      <p className="text-4xl">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
        doloribus omnis eum harum? Deserunt cupiditate mollitia eaque sapiente
        optio asperiores ipsa blanditiis alias, totam porro voluptas fugiat
        accusamus reprehenderit, at ducimus rem, sunt quaerat et? Maiores
        aspernatur et vitae culpa ad voluptatem deserunt debitis, magnam
        voluptate veritatis! Sint rem eius temporibus aut optio tempore deleniti
        provident? Eos atque, harum voluptas natus suscipit perferendis expedita
        minus mollitia exercitationem itaque similique tempora eveniet dolor,
        eius reprehenderit voluptate corporis perspiciatis cum delectus!
        Deserunt molestiae odio eius? Fuga iusto repudiandae magni ipsa
        reiciendis culpa, minima tempore laboriosam laudantium non at distinctio
        cum ad quia. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Quidem doloribus omnis eum harum? Deserunt cupiditate mollitia eaque
        sapiente optio asperiores ipsa blanditiis alias, totam porro voluptas
        fugiat accusamus reprehenderit, at ducimus rem, sunt quaerat et? Maiores
        aspernatur et vitae culpa ad voluptatem deserunt debitis, magnam
        voluptate veritatis! Sint rem eius temporibus aut optio tempore deleniti
        provident? Eos atque, harum voluptas natus suscipit perferendis expedita
        minus mollitia exercitationem itaque similique tempora eveniet dolor,
        eius reprehenderit voluptate corporis perspiciatis cum delectus!
        Deserunt molestiae odio eius? Fuga iusto repudiandae magni ipsa
        reiciendis culpa, minima tempore laboriosam laudantium non at distinctio
        cum ad quia. laboriosam laudantium non at distinctio cum ad quia. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Quidem doloribus
        omnis eum harum? Deserunt cupiditate mollitia eaque sapiente optio
        asperiores ipsa blanditiis alias, totam porro voluptas fugiat accusamus
        reprehenderit, at ducimus rem, sunt quaerat et? Maiores aspernatur et
        vitae culpa ad voluptatem deserunt debitis, magnam voluptate veritatis!
        Sint rem eius temporibus aut optio tempore deleniti provident? Eos
        atque, harum voluptas natus suscipit perferendis expedita minus mollitia
        exercitationem itaque similique tempora eveniet dolor, eius
        reprehenderit voluptate corporis perspiciatis cum delectus! Deserunt
        molestiae odio eius? Fuga iusto repudiandae magni ipsa reiciendis culpa,
        minima tempore laboriosam laudantium non at distinctio cum ad quia.
      </p>
    </>
  );
}
