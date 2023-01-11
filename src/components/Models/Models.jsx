import { dataModelWoman, dataModelMan } from "./dataModel";
let data = dataModelWoman;
export const Models = ({ modelCat = "women", onAdd, dataForm }) => {
  data = modelCat === "man" ? dataModelMan : dataModelWoman;
  return (
    <>
      <div className={`${modelCat}`}>
        <div className='modelsBox grid max-4-6xl grid-cols-4 gap-3'>
          {data.map((item) => {
            const { id, name, modelImg } = item;
            return (
              <div className='modelItem' key={id}>
                <label
                  htmlFor={name + id}
                  onClick={(e) => {
                    onAdd(id, "modelId");
                    onAdd(name, "modelName");
                  }}>
                  <div
                    className={`block border-2 border-transparent rounded-xl 
                  ${dataForm.modelId === id ? "!border-green-500" : null}
                  `}>
                    <img
                      src={modelImg}
                      alt='modelsImg'
                      className='w-full rounded-xl'
                    />
                  </div>

                  <div className='wrapper-model flex items-center flex-row mt-2 justify-end'>
                    <input
                      type='radio'
                      id={name + id}
                      name={name}
                      value={name}
                      className='w-4 h-4 text-green-600 bg-green-100 border-green-300 custom-radio'
                    />
                    <span className='ml-2'>{name}</span>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
