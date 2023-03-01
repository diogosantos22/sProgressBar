Citizen.CreateThread(function()
    local RSRCName = nil

    while not RSRCName do
        RSRCName = GetCurrentResourceName()

        Citizen.Wait(500)
    end

    SendNUIMessage({
        action = 'update',
        data = RSRCName,
    })
end)


function start(timer)
    SendNUIMessage({
        action = 'start',
        data = timer,
    })
end

RegisterNuiCallback("stop", function(data, cb)
    TriggerEvent("progressBar:stop")
end)


exports("start", start)