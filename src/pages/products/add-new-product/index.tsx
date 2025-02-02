import { Modal } from "antd";
import { useState } from "react";
import { UploadIcon } from "../../../assets/icons";

interface Props {
  isModalOpen: boolean;
  onClose: () => void;
}
const AddNewProductsForm = (props: Props) => {
  const handleCancel = () => {
    props.onClose();
  };

  const [mainImage, setMainImage] = useState<string | null>(null);
  const [thumbnails, setThumbnails] = useState<(string | null)[]>([
    null,
    null,
    null,
  ]);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index?: number
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);

      if (index !== undefined) {
        // Update a thumbnail
        const updatedThumbnails = [...thumbnails];
        updatedThumbnails[index] = imageUrl;
        setThumbnails(updatedThumbnails);
      } else {
        // Update the main image
        setMainImage(imageUrl);
      }
    }
  };

  return (
    <>
      <Modal
         title={<span style={{ fontSize: "24px", fontWeight: "bold" }}>Edit Product</span>}
        open={props.isModalOpen}
        onCancel={handleCancel}
        width={1000}
        footer={null}
      >
        <form className="grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center space-y-4">
            {/* Main Image Input */}
            <div className="w-full max-w-lg">
              <label
                htmlFor="main-image"
                className="block cursor-pointer h-[400px]  bg-neutral-300  text-center"
              >
                {mainImage ? (
                  <img
                    src={mainImage}
                    alt="Main"
                    className="w-full h-[400px] object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center bg-neutral-300">
                    <img
                      src={UploadIcon}
                      alt="Upload"
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                )}
              </label>
              <input
                id="main-image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e)}
              />
            </div>

            {/* Thumbnail Inputs */}
            <div className="flex space-x-4">
              {thumbnails.map((thumbnail, index) => (
                <div key={index} className="w-[138px] h-[120px]">
                  <label
                    htmlFor={`thumbnail-${index}`}
                    className=" cursor-pointer  bg-neutral-300 h-full  flex justify-center items-center"
                  >
                    {thumbnail ? (
                      <img
                        src={thumbnail}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex justify-center items-center bg-neutral-300">
                        <img
                          src={UploadIcon}
                          alt="Upload"
                          className="w-20 h-20 object-cover"
                        />
                      </div>
                    )}
                  </label>
                  <input
                    id={`thumbnail-${index}`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, index)}
                  />
                </div>
              ))}
            </div>
          </div>
          <section className="">
            <div className=" flex flex-col gap-8">
              <div className="">
                <label
                  htmlFor="productName"
                  className="block text-sm font-bold mb-3"
                >
                  Product Name
                </label>
                <div className="w-full h-[52px] bg-neutral-200 flex justify-center items-center px-4">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full placeholder:text-black outline-none border-none"
                    placeholder="Product Name"
                  />
                </div>
              </div>
              <div className="flex gap-3 flex-col">
                <label
                  htmlFor="productDescription"
                  className="text-sm font-bold"
                >
                  Product Description
                </label>
                <div className="w-full bg-neutral-200 flex justify-center items-center px-4 pt-4">
                  <textarea
                    name="productDescription"
                    id="productDescription"
                    className="w-full placeholder:text-black outline-none border-none"
                    rows={8}
                    cols={40}
                  ></textarea>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex gap-1 flex-col">
                  <label htmlFor="category" className="text-sm font-bold mb-3">Product Category</label>
                  <div className="bg-neutral-200 px-4 py-2 h-[52px] flex items-center">

                  <select
                    name="category"
                    id="category"
                    className="outline-none border-none"
                  >
                    <option value="product">Product</option>
                    <option value="service">Service</option>
                    <option value="other">Other</option>
                  </select>
                  </div>
                </div>
                <div className=" flex gap-1 flex-col">
                  <label htmlFor="price" className="text-sm font-bold mb-3">Product Price</label>
                  <div className="flex items-center gap-1.5 px-4 py-2 h-[52px] bg-neutral-200">
                      <span className="ml-2 text-gray-700">GHS</span>
                    <input
                      type="number"
                      min="0"
                      className="focus:outline-none"
                    />
                  </div>
                </div>
              </div>
<div className="grid grid-cols-2 gap-6">
    <div></div>

              <button className="rounded-lg bg-black font-bold text-white text-[17px] cursor-pointer h-[52px]">Save Product</button>
</div>
            </div>
          </section>
        </form>
      </Modal>
    </>
  );
};

export default AddNewProductsForm;
