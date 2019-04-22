// Get the HTML elements
let brandSelectBox = $('#brand');
let modelSelectBox = $('#model');

let brands=[{id:1,name:'Maruthi Suzuki'},{id:2,name:'Suzuki NEXA'},
                                        {id:3,name:'Hyndai Motors'}];

let models=[{id:1,cardId:1,name:'Swift'},{id:2,cardId:1,name:'Brezza'},
    {id:3,cardId:1,name:'Ertiga'},{id:4,cardId:2,name:'Baleno'},
    {id:5,cardId:2,name:'Ignis'},{id:6,cardId:2,name:'S-Cross'},
    {id:7,cardId:3,name:'Creta'},{id:8,cardId:3,name:'Grand i20'},
    {id:9,cardId:3,name:'Verna'}];

let brandOptions = `<option>Select a Car</option>`;
for(let brand of  brands){
    brandOptions += `<option value="${brand.id}">${brand.name}</option>`;
}
brandSelectBox.append(brandOptions);

// Change event for Brands
brandSelectBox.change(function() {
    modelSelectBox.removeAttr('disabled');
    let selectedId = Number($(this).val());
    let selectedModels = models.filter((model) => {
        return selectedId === model.cardId;
    });
    let modelOptions = `<option>Select a Model</option>`;
    // Loop thru the selected Models
    for(let model of selectedModels){
        modelOptions += `<option value="${model.id}">${model.name}</option>`;
    }
    modelSelectBox.empty().append(modelOptions);
});