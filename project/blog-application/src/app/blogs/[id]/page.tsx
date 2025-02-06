import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Comment_section from '@/components/(Blog-Page)/Comment-section';
import Footer from '@/components/Home/Footer/Footer';

// import sanityClient from '@/lib/sanity';
// import {defineQuery} from "next-sanity"

const DynamicBlogPage = async ({ params }: {params:Promise<{id:string}>}) => {
    const {id} = await params;
    console.log(id);
    
    //     const q = defineQuery(`
    //         *[_type == "accounts" && _id == "${id}"]{
    //   userInfo,
    //   blogPosts,
    //   _id,
    // }
    //         `);
    // const response = await sanityClient.fetch(q);
    // console.log(response.data);


    return (
        <>
            <Header />
            <br /><br /><br /><br /><br /><br /><br />
            <section className='p-5'>
                <h1 className='font-bold text-[35px]'>jkhd fdshfjksd fdshfjksd fjkshdfjkdf djfnjd fjkdfhjsd fjhdjf djkfnsjdj ksdhjfhsdj njkhdfjkdhfjkhdfjkh djkfhjfh</h1>
                <br />
                <div className='flex flex-nowrap flex-row justify-between items-center'>
                    <div className='flex flex-row flex-nowrap justify-start items-center'>
                        <Image src={"/images/person.jpg"} alt='person' width={60} height={60} className=' rounded-full' />
                        <div className='font-bold'>Person name hf</div>
                    </div>
                    <div>
                        <h1 className='italic font-bold'>12-10-2015</h1>
                    </div>
                </div>

                <Image src={"/images/signup-background.svg"} alt='banner blog' width={500} height={300} className='w-[80vw] h-[200px] border-2 border-solid border-black m-auto'/>
                <br />
                <br />

                <div className='border-2 border-solid border-black p-5 leading-[32px]'>
                    <p>loremfhds fjkshdfdsfjksh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolorem odio ex aliquam, illo at similique ab ut. Nesciunt explicabo, tempora id cum nemo debitis vero iste dolorem. Libero, soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio sint tenetur nam quas, voluptate nesciunt ducimus quos dolore aspernatur possimus. Nam porro quis sed soluta rerum ut libero qui repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima hic molestias sapiente labore modi voluptatibus tempora sunt error reiciendis cumque recusandae itaque, in vel perspiciatis. Aut amet assumenda autem!</p>
                    <p>loremfhds fjkshdfdsfjksh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolorem odio ex aliquam, illo at similique ab ut. Nesciunt explicabo, tempora id cum nemo debitis vero iste dolorem. Libero, soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio sint tenetur nam quas, voluptate nesciunt ducimus quos dolore aspernatur possimus. Nam porro quis sed soluta rerum ut libero qui repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima hic molestias sapiente labore modi voluptatibus tempora sunt error reiciendis cumque recusandae itaque, in vel perspiciatis. Aut amet assumenda autem!</p>
                    <p>loremfhds fjkshdfdsfjksh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolorem odio ex aliquam, illo at similique ab ut. Nesciunt explicabo, tempora id cum nemo debitis vero iste dolorem. Libero, soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio sint tenetur nam quas, voluptate nesciunt ducimus quos dolore aspernatur possimus. Nam porro quis sed soluta rerum ut libero qui repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima hic molestias sapiente labore modi voluptatibus tempora sunt error reiciendis cumque recusandae itaque, in vel perspiciatis. Aut amet assumenda autem!</p>
                    <br />
                    <h1 className='font-bold text-[28px] leading-[60px]'>Heading-1</h1>

                    <p>loremfhds fjkshdfdsfjksh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolorem odio ex aliquam, illo at similique ab ut. Nesciunt explicabo, tempora id cum nemo debitis vero iste dolorem. Libero, soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio sint tenetur nam quas, voluptate nesciunt ducimus quos dolore aspernatur possimus. Nam porro quis sed soluta rerum ut libero qui repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima hic molestias sapiente labore modi voluptatibus tempora sunt error reiciendis cumque recusandae itaque, in vel perspiciatis. Aut amet assumenda autem!</p>
                    <br />
                    <h2 className='font-bold text-[25px]'>heading-2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum vero ullam, delectus doloremque officia cumque, aliquid deserunt cum accusamus maiores quo fuga tempora recusandae incidunt. Earum sequi deserunt voluptates reprehenderit!</p>
                    <br />
                    <h3 className='font-bold text-[22px]'>heading-3</h3>
                    <p>dfhsgdfhgdsshdf dfhds fuids fsduif ysduifydsfyuids fyuid sfuids yfuidsyfu sufiy dsfuidyf udsfuiydsfuids fuisdyf udyfui</p>
                    <p>loremfhds fjkshdfdsfjksh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolorem odio ex aliquam, illo at similique ab ut. Nesciunt explicabo, tempora id cum nemo debitis vero iste dolorem. Libero, soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio sint tenetur nam quas, voluptate nesciunt ducimus quos dolore aspernatur possimus. Nam porro quis sed soluta rerum ut libero qui repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima hic molestias sapiente labore modi voluptatibus tempora sunt error reiciendis cumque recusandae itaque, in vel perspiciatis. Aut amet assumenda autem!</p>
                    <p>loremfhds fjkshdfdsfjksh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolorem odio ex aliquam, illo at similique ab ut. Nesciunt explicabo, tempora id cum nemo debitis vero iste dolorem. Libero, soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio sint tenetur nam quas, voluptate nesciunt ducimus quos dolore aspernatur possimus. Nam porro quis sed soluta rerum ut libero qui repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima hic molestias sapiente labore modi voluptatibus tempora sunt error reiciendis cumque recusandae itaque, in vel perspiciatis. Aut amet assumenda autem!</p>
                    <p>loremfhds fjkshdfdsfjksh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolorem odio ex aliquam, illo at similique ab ut. Nesciunt explicabo, tempora id cum nemo debitis vero iste dolorem. Libero, soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio sint tenetur nam quas, voluptate nesciunt ducimus quos dolore aspernatur possimus. Nam porro quis sed soluta rerum ut libero qui repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima hic molestias sapiente labore modi voluptatibus tempora sunt error reiciendis cumque recusandae itaque, in vel perspiciatis. Aut amet assumenda autem!</p>
                    <p>loremfhds fjkshdfdsfjksh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolorem odio ex aliquam, illo at similique ab ut. Nesciunt explicabo, tempora id cum nemo debitis vero iste dolorem. Libero, soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio sint tenetur nam quas, voluptate nesciunt ducimus quos dolore aspernatur possimus. Nam porro quis sed soluta rerum ut libero qui repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima hic molestias sapiente labore modi voluptatibus tempora sunt error reiciendis cumque recusandae itaque, in vel perspiciatis. Aut amet assumenda autem!</p>
                    <p>loremfhds fjkshdfdsfjksh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolorem odio ex aliquam, illo at similique ab ut. Nesciunt explicabo, tempora id cum nemo debitis vero iste dolorem. Libero, soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio sint tenetur nam quas, voluptate nesciunt ducimus quos dolore aspernatur possimus. Nam porro quis sed soluta rerum ut libero qui repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima hic molestias sapiente labore modi voluptatibus tempora sunt error reiciendis cumque recusandae itaque, in vel perspiciatis. Aut amet assumenda autem!</p>
                    <p>loremfhds fjkshdfdsfjksh Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet dolorem odio ex aliquam, illo at similique ab ut. Nesciunt explicabo, tempora id cum nemo debitis vero iste dolorem. Libero, soluta! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio sint tenetur nam quas, voluptate nesciunt ducimus quos dolore aspernatur possimus. Nam porro quis sed soluta rerum ut libero qui repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minima hic molestias sapiente labore modi voluptatibus tempora sunt error reiciendis cumque recusandae itaque, in vel perspiciatis. Aut amet assumenda autem!</p>
                </div>
            </section>
            <br />
            <Comment_section/>
            <Footer/>
            {/* <NotifyError message='Please enter your correct name'/> */}

        </>
    )
}

export default DynamicBlogPage