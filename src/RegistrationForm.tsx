import React, { useState } from 'react';
import { User, LogOut } from 'lucide-react';

interface FormData {
  apellidos: string;
  nombre: string;
  sexo: string;
  dni: string;
  nss: string;
  discapacidad: boolean;
  porcentajeDiscapacidad: string;
  direccion: string;
  localidad: string;
  provincia: string;
  codigoPostal: string;
  fechaNacimiento: string;
  pais: string;
  localidadNacimiento: string;
  provinciaNacimiento: string;
  email: string;
  telefonoFijo: string;
  telefonoMovil: string;
  titulacion: string;
  nombreEntidadBancaria: string;
  iban: string;
  bicCode: string;
  contactoEmergenciaNombre: string;
  contactoEmergenciaParentesco: string;
  contactoEmergenciaTelefono: string;
}

interface FileData {
  dniFile: File | null;
  nssFile: File | null;
  discapacidadFile: File | null;
  certificadoBancario: File | null;
  cvFile: File | null;
  fotoFile: File | null;
  titulacionFile: File | null;
  prlFile: File | null;
}

function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    apellidos: '',
    nombre: '',
    sexo: '',
    dni: '',
    nss: '',
    discapacidad: false,
    porcentajeDiscapacidad: '',
    direccion: '',
    localidad: '',
    provincia: '',
    codigoPostal: '',
    fechaNacimiento: '',
    pais: '',
    localidadNacimiento: '',
    provinciaNacimiento: '',
    email: '',
    telefonoFijo: '',
    telefonoMovil: '',
    titulacion: '',
    nombreEntidadBancaria: '',
    iban: '',
    bicCode: '',
    contactoEmergenciaNombre: '',
    contactoEmergenciaParentesco: '',
    contactoEmergenciaTelefono: '',
  });

  const [fileData, setFileData] = useState<FileData>({
    dniFile: null,
    nssFile: null,
    discapacidadFile: null,
    certificadoBancario: null,
    cvFile: null,
    fotoFile: null,
    titulacionFile: null,
    prlFile: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFileData(prev => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('File Data:', fileData);
    alert('Formulario enviado con éxito');
  };

  return (
    <div className="relative py-3 sm:max-w-6xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <User size={32} className="text-red-500" />
            <img src="https://ideaingenieria.es/wp-content/uploads/2021/10/idea-ingenieria-logo.png" alt="Idea Ingeniería Logo" className="h-12" />
            <button className="text-red-500 hover:text-red-700">
              <LogOut size={24} />
            </button>
          </div>
          
          <h1 className="text-3xl font-semibold text-center mb-5">Formulario de Registro</h1>
          
          <div className="bg-gray-100 border-l-4 border-red-500 text-gray-700 p-4 mb-6">
            <p className="font-bold">Hola! 😊 Te damos la bienvenida a este sencillo formulario que nos ayudará a completar tu proceso de contratación.</p>
            <p className="mt-2">Aquí podrás proporcionarnos algunos datos importantes para formalizar todo de manera rápida y eficiente. Puedes ir guardando tu progreso en cualquier momento y retomar cuando lo necesites.</p>
            <p className="mt-2">Una vez que hayas completado toda la información, el equipo de Persona & Organización se pondrá en contacto contigo por correo electrónico para los siguientes pasos.</p>
            <p className="mt-2">Si tienes alguna duda durante el proceso, no dudes en escribirnos a rrhh@ideaingenieria.es, estaremos encantados de ayudarte.</p>
            <p className="mt-2 font-bold">¡Gracias por tu tiempo!</p>
          </div>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Datos Personales */}
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-3">Datos Personales</h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="apellidos" className="mb-1">Apellidos</label>
              <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="nombre" className="mb-1">Nombre</label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="sexo" className="mb-1">Sexo</label>
              <select id="sexo" name="sexo" value={formData.sexo} onChange={handleChange} required className="form-select rounded-md shadow-sm">
                <option value="">Seleccione</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="fechaNacimiento" className="mb-1">Fecha de Nacimiento</label>
              <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="pais" className="mb-1">País de Nacimiento</label>
              <input type="text" id="pais" name="pais" value={formData.pais} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="localidadNacimiento" className="mb-1">Localidad de Nacimiento</label>
              <input type="text" id="localidadNacimiento" name="localidadNacimiento" value={formData.localidadNacimiento} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="provinciaNacimiento" className="mb-1">Provincia de Nacimiento</label>
              <input type="text" id="provinciaNacimiento" name="provinciaNacimiento" value={formData.provinciaNacimiento} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>

            {/* Datos de Contacto */}
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-3 mt-6">Datos de Contacto</h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="direccion" className="mb-1">Dirección</label>
              <input type="text" id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="localidad" className="mb-1">Localidad</label>
              <input type="text" id="localidad" name="localidad" value={formData.localidad} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="provincia" className="mb-1">Provincia</label>
              <input type="text" id="provincia" name="provincia" value={formData.provincia} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="codigoPostal" className="mb-1">Código Postal</label>
              <input type="text" id="codigoPostal" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="telefonoFijo" className="mb-1">Teléfono Fijo</label>
              <input type="tel" id="telefonoFijo" name="telefonoFijo" value={formData.telefonoFijo} onChange={handleChange} className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="telefonoMovil" className="mb-1">Teléfono Móvil</label>
              <input type="tel" id="telefonoMovil" name="telefonoMovil" value={formData.telefonoMovil} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>

            {/* Documentación */}
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-3 mt-6">Documentación</h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="dni" className="mb-1">DNI</label>
              <input type="text" id="dni" name="dni" value={formData.dni} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
              <input type="file" name="dniFile" onChange={handleFileChange} className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="nss" className="mb-1">Número de Seguridad Social</label>
              <input type="text" id="nss" name="nss" value={formData.nss} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
              <input type="file" name="nssFile" onChange={handleFileChange} className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100" />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 flex items-center">
                <input type="checkbox" name="discapacidad" checked={formData.discapacidad} onChange={handleChange} className="mr-2 form-checkbox" />
                Discapacidad
              </label>
              {formData.discapacidad && (
                <>
                  <input type="text" name="porcentajeDiscapacidad" value={formData.porcentajeDiscapacidad} onChange={handleChange} placeholder="Porcentaje de discapacidad" className="mt-2 form-input rounded-md shadow-sm" />
                  <input type="file" name="discapacidadFile" onChange={handleFileChange} className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100" />
                </>
              )}
            </div>

            {/* Datos Bancarios */}
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-3 mt-6">Datos Bancarios</h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="nombreEntidadBancaria" className="mb-1">Nombre de la Entidad Bancaria</label>
              <input type="text" id="nombreEntidadBancaria" name="nombreEntidadBancaria" value={formData.nombreEntidadBancaria} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="iban" className="mb-1">IBAN</label>
              <input type="text" id="iban" name="iban" value={formData.iban} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="bicCode" className="mb-1">BIC Code</label>
              <input type="text" id="bicCode" name="bicCode" value={formData.bicCode} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="certificadoBancario" className="mb-1">Certificado Bancario</label>
              <input type="file" name="certificadoBancario" onChange={handleFileChange} className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100" />
            </div>

            {/* Formación */}
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-3 mt-6">Formación</h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="titulacion" className="mb-1">Titulación</label>
              <input type="text" id="titulacion" name="titulacion" value={formData.titulacion} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
              <input type="file" name="titulacionFile" onChange={handleFileChange} className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100" />
            </div>

            {/* Otros Documentos */}
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-3 mt-6">Otros Documentos</h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="cvFile" className="mb-1">Curriculum Vitae</label>
              <input type="file" name="cvFile" onChange={handleFileChange} className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="fotoFile" className="mb-1">Foto</label>
              <input type="file" name="fotoFile" onChange={handleFileChange} className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="prlFile" className="mb-1">Curso PRL</label>
              <input type="file" name="prlFile" onChange={handleFileChange} className="mt-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100" />
            </div>

            {/* Contacto de Emergencia */}
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-3 mt-6">Contacto de Emergencia</h2>
            </div>
            <div className="flex flex-col">
              <label htmlFor="contactoEmergenciaNombre" className="mb-1">Nombre</label>
              <input type="text" id="contactoEmergenciaNombre" name="contactoEmergenciaNombre" value={formData.contactoEmergenciaNombre} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="contactoEmergenciaParentesco" className="mb-1">Parentesco</label>
              <input type="text" id="contactoEmergenciaParentesco" name="contactoEmergenciaParentesco" value={formData.contactoEmergenciaParentesco} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="contactoEmergenciaTelefono" className="mb-1">Teléfono</label>
              <input type="tel" id="contactoEmergenciaTelefono" name="contactoEmergenciaTelefono" value={formData.contactoEmergenciaTelefono} onChange={handleChange} required className="form-input rounded-md shadow-sm" />
            </div>

            {/* Botón de envío */}
            <div className="col-span-2 mt-6">
              <button type="submit" className="w-full bg-red-500 text-white py-3 px-4 rounded-md hover:bg-red-600 transition duration-300 text-lg font-semibold">
                Enviar Formulario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;